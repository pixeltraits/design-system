import { Directive } from '@angular/core';

@Directive({
  selector: 'td[dsResponsiveTableTd]',
  host: { 'class': 'ds-responsive-table-td' },
})
export class DsResponsiveTableTd {}
