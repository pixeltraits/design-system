import { Directive } from '@angular/core';

@Directive({
  selector: 'mat-form-field[dsFormField]',
  host: { class: 'ds-form-field' },
})
export class DsFormField {}
