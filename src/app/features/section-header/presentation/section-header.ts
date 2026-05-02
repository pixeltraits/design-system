import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ds-section-header',
  templateUrl: 'section-header.html',
  styleUrl: 'section-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsSectionHeader {
  tag = input.required<string>();
  title = input<string>();
}
