import { Directive, inject } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Directive({
  selector: 'mat-select[dsSelect]',
  host: { class: 'ds-select' },
})
export class DsSelect {
  constructor() {
    inject(MatSelect).panelClass = 'ds-select-panel';
  }
}
