import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DsFormField } from './form-field';
import { DsInput } from '../input/input';

@Component({
  template: `
    <mat-form-field dsFormField>
      <mat-label>Email</mat-label>
      <input dsInput type="email" [formControl]="control" />
      <mat-hint>Your email</mat-hint>
      <mat-error>Invalid email</mat-error>
    </mat-form-field>
  `,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, DsFormField, DsInput],
})
class FormFieldTestHost {
  control = new FormControl('', Validators.required);
}

describe('DsFormField', () => {
  let fixture: ComponentFixture<FormFieldTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldTestHost);
    await fixture.whenStable();
  });

  it('should apply ds-form-field class', () => {
    const formField = fixture.nativeElement.querySelector('mat-form-field');
    expect(formField.classList).toContain('ds-form-field');
  });

  it('should render the label', () => {
    const label = fixture.nativeElement.querySelector('mat-label');
    expect(label).toBeTruthy();
    expect(label.textContent).toContain('Email');
  });

  it('should render the hint', () => {
    const hint = fixture.nativeElement.querySelector('mat-hint');
    expect(hint).toBeTruthy();
    expect(hint.textContent).toContain('Your email');
  });

  it('should show error when control is touched and invalid', async () => {
    const host = fixture.componentInstance;
    host.control.markAsTouched();
    await fixture.whenStable();

    const error = fixture.nativeElement.querySelector('mat-error');
    expect(error).toBeTruthy();
  });
});
