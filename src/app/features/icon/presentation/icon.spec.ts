import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { DsIcon, DsIconSize } from './icon';
import { DsIconName } from './icon-registry';

@Component({
  template: `<ds-icon [icon]="icon()" [size]="size()" [label]="label()" />`,
  imports: [DsIcon],
})
class TestHost {
  icon = signal<DsIconName>('star');
  size = signal<DsIconSize>('md');
  label = signal<string | undefined>(undefined);
}

describe('DsIcon', () => {
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
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el).toBeTruthy();
  });

  it('should render an SVG via fa-icon', () => {
    const svg = fixture.nativeElement.querySelector('ds-icon svg');
    expect(svg).toBeTruthy();
  });

  it('should apply ds-icon base class', () => {
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.classList).toContain('ds-icon');
  });

  it('should apply md size class by default', () => {
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.classList).toContain('ds-icon--md');
  });

  it('should apply sm size class', async () => {
    host.size.set('sm');
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.classList).toContain('ds-icon--sm');
    expect(el.classList).not.toContain('ds-icon--md');
  });

  it('should apply lg size class', async () => {
    host.size.set('lg');
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.classList).toContain('ds-icon--lg');
  });

  it('should apply xl size class', async () => {
    host.size.set('xl');
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.classList).toContain('ds-icon--xl');
  });

  it('should be aria-hidden when no label is provided', () => {
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.getAttribute('aria-hidden')).toBe('true');
    expect(el.hasAttribute('aria-label')).toBe(false);
  });

  it('should have aria-label and role="img" when label is provided', async () => {
    host.label.set('Favorite');
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector('ds-icon');
    expect(el.getAttribute('aria-label')).toBe('Favorite');
    expect(el.getAttribute('aria-hidden')).toBeNull();
    expect(el.getAttribute('role')).toBe('img');
  });

  it('should update icon when input changes', async () => {
    const svgBefore = fixture.nativeElement.querySelector('ds-icon svg');
    expect(svgBefore).toBeTruthy();

    host.icon.set('check');
    await fixture.whenStable();

    const svgAfter = fixture.nativeElement.querySelector('ds-icon svg');
    expect(svgAfter).toBeTruthy();
  });
});
