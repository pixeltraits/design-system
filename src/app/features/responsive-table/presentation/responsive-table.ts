import { Directive } from '@angular/core';

@Directive({
  selector: 'table[dsResponsiveTable]',
  host: { 'class': 'ds-responsive-table' },
})
export class DsResponsiveTable {}
