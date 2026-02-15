import { Directive, input } from '@angular/core';

export type DsButtonVariant = 'primary' | 'secondary' | 'danger';

@Directive({
  selector: 'button[dsButton], a[dsButton]',
  host: {
    'class': 'ds-button',
    '[class.ds-button--primary]': 'dsButton() === "primary"',
    '[class.ds-button--secondary]': 'dsButton() === "secondary"',
    '[class.ds-button--danger]': 'dsButton() === "danger"',
  },
})
export class DsButton {
  dsButton = input<DsButtonVariant>('primary');
}
