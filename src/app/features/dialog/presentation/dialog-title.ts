import { Directive } from '@angular/core';
import { MatDialogTitle } from '@angular/material/dialog';

@Directive({
  selector: '[dsDialogTitle]',
  hostDirectives: [MatDialogTitle],
  host: {
    class: 'ds-dialog-title',
  },
})
export class DsDialogTitle {}
