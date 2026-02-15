import { Directive, input } from '@angular/core';

@Directive({
  selector: 'th[dsResponsiveTableActions], td[dsResponsiveTableActions]',
  host: {
    'class': 'ds-responsive-table-actions',
    '[class.ds-responsive-table-actions--header]': 'isHeaderActions()',
  },
})
export class DsResponsiveTableActions {
  isHeaderActions = input(false);
}
