import { Directive } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';

@Directive({
  selector: '[dsDialogActions]',
  hostDirectives: [{ directive: MatDialogActions, inputs: ['align'] }],
  host: {
    class: 'ds-dialog-actions',
  },
})
export class DsDialogActions {}
