import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { DsSidenavHeader } from './sidenav-header';
import { DsSidenavBody } from './sidenav-body';

@Component({
  template: `
    <ds-sidenav-header (closed)="onClosed()">
      My Title
    </ds-sidenav-header>
    <div dsSidenavBody>Body content</div>
  `,
  imports: [DsSidenavHeader, DsSidenavBody],
})
class SidenavTestHost {
  closedCount = 0;
  onClosed() {
    this.closedCount++;
  }
}

describe('DsSidenavHeader', () => {
  let fixture: ComponentFixture<SidenavTestHost>;
  let host: SidenavTestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavTestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should render the projected title', () => {
    const title = fixture.nativeElement.querySelector('.ds-sidenav-header__title');
    expect(title).toBeTruthy();
    expect(title.textContent.trim()).toBe('My Title');
  });

  it('should emit closed when close button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.ds-sidenav-header__close');
    button.click();
    expect(host.closedCount).toBe(1);
  });

  it('should have aria-label on the close button', () => {
    const button = fixture.nativeElement.querySelector('.ds-sidenav-header__close');
    expect(button.getAttribute('aria-label')).toBe('Close navigation');
  });

  it('should apply ds-sidenav-header host class', () => {
    const header = fixture.nativeElement.querySelector('ds-sidenav-header');
    expect(header.classList).toContain('ds-sidenav-header');
  });
});

describe('DsSidenavBody', () => {
  let fixture: ComponentFixture<SidenavTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavTestHost);
    await fixture.whenStable();
  });

  it('should apply ds-sidenav-body class', () => {
    const body = fixture.nativeElement.querySelector('[dsSidenavBody]');
    expect(body.classList).toContain('ds-sidenav-body');
  });
});
