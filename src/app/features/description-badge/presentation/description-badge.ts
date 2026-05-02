import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ds-description-badge',
  templateUrl: 'description-badge.html',
  styleUrl: 'description-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsDescriptionBadge {
  company = input.required<string>();
  role = input.required<string>();
  period = input.required<string>();
}
