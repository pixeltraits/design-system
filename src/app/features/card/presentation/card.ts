import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ds-card',
  templateUrl: 'card.html',
  styleUrl: 'card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCard {
  title = input.required<string>();
  description = input.required<string>();
}
