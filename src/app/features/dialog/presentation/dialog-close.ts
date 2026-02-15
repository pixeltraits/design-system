import { Directive, input } from '@angular/core';
import { MatDialogClose } from '@angular/material/dialog';

@Directive({
  selector: '[dsDialogClose]',
  hostDirectives: [{ directive: MatDialogClose, inputs: ['matDialogClose: dsDialogClose'] }],
})
export class DsDialogClose {
  dsDialogClose = input<unknown>();
}
