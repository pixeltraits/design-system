import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { DsButton, DsButtonVariant } from './button';

@Component({
  template: `<button [dsButton]="variant()" [disabled]="disabled()">Click me</button>`,
  imports: [DsButton],
})
class ButtonTestHost {
  variant = signal<DsButtonVariant>('primary');
  disabled = signal(false);
}

@Component({
  template: `<a [dsButton]="variant()" href="#">Link</a>`,
  imports: [DsButton],
})
class AnchorTestHost {
  variant = signal<DsButtonVariant>('primary');
}

describe('DsButton on <button>', () => {
  let fixture: ComponentFixture<ButtonTestHost>;
  let host: ButtonTestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTestHost],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply ds-button base class', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('ds-button');
  });

  it('should apply primary variant class by default', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('ds-button--primary');
  });

  it('should apply secondary variant class', async () => {
    host.variant.set('secondary');
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('ds-button--secondary');
    expect(button.classList).not.toContain('ds-button--primary');
  });

  it('should apply danger variant class', async () => {
    host.variant.set('danger');
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('ds-button--danger');
  });

  it('should disable the button', async () => {
    host.disabled.set(true);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('should be a native button element', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.tagName).toBe('BUTTON');
  });
});

describe('DsButton on <a>', () => {
  let fixture: ComponentFixture<AnchorTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorTestHost],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnchorTestHost);
    await fixture.whenStable();
  });

  it('should apply ds-button base class on an anchor', () => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link.classList).toContain('ds-button');
  });

  it('should apply primary variant class on an anchor', () => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link.classList).toContain('ds-button--primary');
  });

  it('should be a native anchor element', () => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link.tagName).toBe('A');
  });
});
