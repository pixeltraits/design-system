import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type DsStatusBadgeState = 'available' | 'warning' | 'unavailable';

@Component({
  selector: 'ds-status-badge',
  templateUrl: 'status-badge.html',
  styleUrl: 'status-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ds-status-badge--warning]': 'state() === "warning"',
    '[class.ds-status-badge--unavailable]': 'state() === "unavailable"',
  },
})
export class DsStatusBadge {
  state = input<DsStatusBadgeState>('available');
}
