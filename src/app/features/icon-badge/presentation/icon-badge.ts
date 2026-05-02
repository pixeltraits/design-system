import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type DsIconBadgeVariant = 'primary' | 'accent';

@Component({
  selector: 'ds-icon-badge',
  templateUrl: 'icon-badge.html',
  styleUrl: 'icon-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ds-icon-badge--primary]': 'variant() === "primary"',
    '[class.ds-icon-badge--accent]': 'variant() === "accent"',
    class: 'ds-icon-badge',
  },
})
export class DsIconBadge {
  variant = input<DsIconBadgeVariant>('primary');
}
