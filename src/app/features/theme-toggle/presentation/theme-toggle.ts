import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { DsIcon } from '../../icon/presentation/icon';

export type DsThemeToggleValue = 'night' | 'normal' | 'day';

@Component({
  selector: 'ds-theme-toggle',
  imports: [DsIcon],
  templateUrl: 'theme-toggle.html',
  styleUrl: 'theme-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsThemeToggle {
  /** État courant — binding bidirectionnel via `[(value)]`. */
  readonly value = model<DsThemeToggleValue>('normal');

  /** Étiquette accessible du groupe radio. */
  readonly ariaLabel = input<string>('Mode d’affichage');

  protected select(next: DsThemeToggleValue): void {
    this.value.set(next);
  }
}
