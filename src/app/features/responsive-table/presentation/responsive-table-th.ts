import { Directive } from '@angular/core';

@Directive({
  selector: 'th[dsResponsiveTableTh]',
  host: { 'class': 'ds-responsive-table-th' },
})
export class DsResponsiveTableTh {}
