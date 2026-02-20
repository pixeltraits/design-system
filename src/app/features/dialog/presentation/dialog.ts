import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ds-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ds-dialog',
  },
  template: `
    <ng-content select="[dsDialogTitle]" />
    <ng-content select="[dsDialogContent]" />
    <ng-content select="[dsDialogActions]" />
  `,
})
export class DsDialogComponent {}
