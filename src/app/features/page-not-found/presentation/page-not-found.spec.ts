import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DsPageNotFound } from './page-not-found';
import { DsIconName } from '@features/icon/presentation/icon-registry';

@Component({
  template: `<ds-page-not-found
    [icon]="icon()"
    [title]="title()"
    [buttonText]="buttonText()"
    [link]="link()"
  />`,
  imports: [DsPageNotFound],
})
class TestHost {
  icon = signal<DsIconName>('circle-exclamation');
  title = signal('Page not found');
  buttonText = signal('Back to home');
  link = signal('/');
}

describe('DsPageNotFound', () => {
  let fixture: ComponentFixture<TestHost>;
  let host: TestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const el = fixture.nativeElement.querySelector('ds-page-not-found');
    expect(el).toBeTruthy();
  });

  it('should display an icon', () => {
    const icon = fixture.nativeElement.querySelector('ds-icon');
    expect(icon).toBeTruthy();
  });

  it('should display default title', () => {
    const title = fixture.nativeElement.querySelector('.ds-page-not-found__title');
    expect(title.textContent).toContain('Page not found');
  });

  it('should display default button text', () => {
    const link = fixture.nativeElement.querySelector('a[dsButton]');
    expect(link.textContent).toContain('Back to home');
  });

  it('should render an anchor element, not a button', () => {
    const link = fixture.nativeElement.querySelector('a[dsButton]');
    expect(link).toBeTruthy();
    expect(link.tagName).toBe('A');
  });

  it('should link to "/" by default', () => {
    const link = fixture.nativeElement.querySelector('a[dsButton]');
    expect(link.getAttribute('href')).toBe('/');
  });

  it('should accept custom icon', async () => {
    host.icon.set('triangle-exclamation');
    await fixture.whenStable();
    const svg = fixture.nativeElement.querySelector('ds-icon svg');
    expect(svg.getAttribute('data-icon')).toBe('triangle-exclamation');
  });

  it('should accept custom title', async () => {
    host.title.set('Oops!');
    await fixture.whenStable();
    const title = fixture.nativeElement.querySelector('.ds-page-not-found__title');
    expect(title.textContent).toContain('Oops!');
  });

  it('should accept custom button text', async () => {
    host.buttonText.set('Go back');
    await fixture.whenStable();
    const link = fixture.nativeElement.querySelector('a[dsButton]');
    expect(link.textContent).toContain('Go back');
  });

  it('should accept custom link', async () => {
    host.link.set('/dashboard');
    await fixture.whenStable();
    const link = fixture.nativeElement.querySelector('a[dsButton]');
    expect(link.getAttribute('href')).toBe('/dashboard');
  });

  it('should apply host class', () => {
    const el = fixture.nativeElement.querySelector('ds-page-not-found');
    expect(el.classList).toContain('ds-page-not-found');
  });
});
