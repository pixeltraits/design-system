import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { DsBurger } from './burger';
import { DsDrawer } from './drawer';

@Component({
  template: `
    <ds-burger [(open)]="open" controls="test-drawer" label="Ouvrir" />
    <ds-drawer [(open)]="open" id="test-drawer" label="Menu">
      <p>Contenu</p>
    </ds-drawer>
  `,
  imports: [DsBurger, DsDrawer],
})
class DrawerTestHost {
  readonly open = signal(false);
}

describe('DsBurger', () => {
  let fixture: ComponentFixture<DrawerTestHost>;
  let host: DrawerTestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerTestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should toggle open when the button is clicked', async () => {
    const button = fixture.nativeElement.querySelector('.ds-burger');
    expect(host.open()).toBe(false);
    button.click();
    await fixture.whenStable();
    expect(host.open()).toBe(true);
  });

  it('should reflect the open state on aria-expanded', async () => {
    const button = fixture.nativeElement.querySelector('.ds-burger');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    host.open.set(true);
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('should set aria-controls to the drawer id', () => {
    const button = fixture.nativeElement.querySelector('.ds-burger');
    expect(button.getAttribute('aria-controls')).toBe('test-drawer');
  });
});

describe('DsDrawer', () => {
  let fixture: ComponentFixture<DrawerTestHost>;
  let host: DrawerTestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerTestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should not render the panel while closed', () => {
    expect(fixture.nativeElement.querySelector('.ds-drawer-panel')).toBeNull();
  });

  it('should render an accessible dialog panel when open', async () => {
    host.open.set(true);
    await fixture.whenStable();

    const panel = fixture.nativeElement.querySelector('.ds-drawer-panel');
    expect(panel).toBeTruthy();
    expect(panel.getAttribute('role')).toBe('dialog');
    expect(panel.getAttribute('aria-modal')).toBe('true');
    expect(panel.getAttribute('aria-label')).toBe('Menu');
  });

  it('should close when the scrim is clicked', async () => {
    host.open.set(true);
    await fixture.whenStable();

    fixture.nativeElement.querySelector('.ds-drawer-scrim').click();
    await fixture.whenStable();
    expect(host.open()).toBe(false);
  });
});
