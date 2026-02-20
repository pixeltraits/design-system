import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DsFormField } from '../form-field/form-field';
import { DsSelect } from './select';

@Component({
  template: `
    <mat-form-field dsFormField>
      <mat-label>Country</mat-label>
      <mat-select dsSelect [formControl]="control">
        <mat-option value="fr">France</mat-option>
        <mat-option value="us">United States</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, ReactiveFormsModule, DsFormField, DsSelect],
})
class SelectTestHost {
  control = new FormControl('');
}

describe('DsSelect', () => {
  let fixture: ComponentFixture<SelectTestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTestHost],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectTestHost);
    await fixture.whenStable();
  });

  it('should apply ds-select class', () => {
    const select = fixture.nativeElement.querySelector('mat-select');
    expect(select.classList).toContain('ds-select');
  });

  it('should apply ds-form-field class on the form-field', () => {
    const formField = fixture.nativeElement.querySelector('mat-form-field');
    expect(formField.classList).toContain('ds-form-field');
  });

  it('should set panelClass on MatSelect', () => {
    const select = fixture.debugElement.query(
      (de) => de.componentInstance instanceof MatSelect,
    );
    expect(select.componentInstance.panelClass).toBe('ds-select-panel');
  });

  it('should render the label', () => {
    const label = fixture.nativeElement.querySelector('mat-label');
    expect(label).toBeTruthy();
    expect(label.textContent).toContain('Country');
  });
});
