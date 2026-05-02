import { Directive, input } from '@angular/core';

export type DsBadgeVariant = 'default' | 'primary' | 'accent';

@Directive({
  selector: 'span[dsBadge], div[dsBadge]',
  host: {
    class: 'ds-badge',
    '[class.ds-badge--primary]': 'dsBadge() === "primary"',
    '[class.ds-badge--accent]': 'dsBadge() === "accent"',
  },
})
export class DsBadge {
  dsBadge = input<DsBadgeVariant>('default');
}
