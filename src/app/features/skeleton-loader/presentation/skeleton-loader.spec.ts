import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { DsSkeletonLoader, DsSkeletonVariant } from './skeleton-loader';
import { DsSkeletonLoaderGroup } from './skeleton-loader-group';

@Component({
  template: `<div dsSkeletonLoader [loading]="loading()" [variant]="variant()">Content</div>`,
  imports: [DsSkeletonLoader],
})
class TestHost {
  loading = signal(false);
  variant = signal<DsSkeletonVariant>('wave');
}

@Component({
  template: `
    <div [dsSkeletonLoaderGroup]="loading()">
      <span dsSkeletonLoader>Item 1</span>
      <span dsSkeletonLoader>Item 2</span>
    </div>
  `,
  imports: [DsSkeletonLoader, DsSkeletonLoaderGroup],
})
class GroupTestHost {
  loading = signal(false);
}

describe('DsSkeletonLoader', () => {
  let fixture: ComponentFixture<TestHost>;
  let host: TestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el).toBeTruthy();
  });

  it('should not apply skeleton classes when not loading', () => {
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el.classList).not.toContain('ds-skeleton');
  });

  it('should apply skeleton classes when loading', async () => {
    host.loading.set(true);
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el.classList).toContain('ds-skeleton');
    expect(el.classList).toContain('ds-skeleton--wave');
  });

  it('should set aria-busy when loading', async () => {
    host.loading.set(true);
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el.getAttribute('aria-busy')).toBe('true');
  });

  it('should not set aria-busy when not loading', () => {
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el.getAttribute('aria-busy')).toBe('false');
  });

  it('should apply pulse variant class', async () => {
    host.loading.set(true);
    host.variant.set('pulse');
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el.classList).toContain('ds-skeleton--pulse');
    expect(el.classList).not.toContain('ds-skeleton--wave');
  });

  it('should apply static variant class', async () => {
    host.loading.set(true);
    host.variant.set('static');
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('[dsSkeletonLoader]');
    expect(el.classList).toContain('ds-skeleton--static');
  });
});

describe('DsSkeletonLoaderGroup', () => {
  let fixture: ComponentFixture<GroupTestHost>;
  let host: GroupTestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupTestHost],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupTestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should propagate loading state to all skeleton children', async () => {
    host.loading.set(true);
    await fixture.whenStable();
    const skeletons = fixture.nativeElement.querySelectorAll('[dsSkeletonLoader]');
    skeletons.forEach((el: HTMLElement) => {
      expect(el.classList).toContain('ds-skeleton');
    });
  });

  it('should deactivate all skeleton children when loading is false', async () => {
    host.loading.set(true);
    await fixture.whenStable();
    host.loading.set(false);
    await fixture.whenStable();
    const skeletons = fixture.nativeElement.querySelectorAll('[dsSkeletonLoader]');
    skeletons.forEach((el: HTMLElement) => {
      expect(el.classList).not.toContain('ds-skeleton');
    });
  });
});
