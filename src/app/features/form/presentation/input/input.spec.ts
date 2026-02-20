import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DsFormField } from '../form-field/form-field';
import { DsInput } from './input';

@Component({
  template: `
    <mat-form-field dsFormField>
      <mat-label>Name</mat-label>
      <input dsInput [formControl]="control" />
    </mat-form-field>
  `,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, DsFormField, DsInput],
})
class InputTestHost {
  control = new FormControl('');
}

describe('DsInput', () => {
  let fixture: ComponentFixture<InputTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTestHost);
    await fixture.whenStable();
  });

  it('should apply ds-input class', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.classList).toContain('ds-input');
  });

  it('should activate MatInput on the form-field', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.classList).toContain('mat-mdc-input-element');
  });

  it('should disable the input via FormControl', async () => {
    fixture.componentInstance.control.disable();
    await fixture.whenStable();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBe(true);
  });
});
