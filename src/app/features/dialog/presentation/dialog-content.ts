import { Directive } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';

@Directive({
  selector: '[dsDialogContent]',
  hostDirectives: [MatDialogContent],
  host: {
    class: 'ds-dialog-content',
  },
})
export class DsDialogContent {}
