import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DsIcon } from '../../icon/presentation/icon';
import { DsIconName } from '../../icon/presentation/icon-registry';

export type DsActionCardAnimation = 'bob' | 'bob-sway' | 'none';

@Component({
  selector: 'ds-action-card',
  imports: [DsIcon],
  templateUrl: 'action-card.html',
  styleUrl: 'action-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ds-action-card--bob]': "animation() === 'bob'",
    '[class.ds-action-card--bob-sway]': "animation() === 'bob-sway'",
  },
})
export class DsActionCard {
  /** Cible du lien — `href` natif. */
  readonly href = input.required<string>();

  /** Icône XL affichée au-dessus du label. */
  readonly icon = input.required<DsIconName>();

  /** Libellé affiché sous l'icône. */
  readonly label = input.required<string>();

  /** Lien externe — ajoute `target="_blank"` + `rel="noopener"`. */
  readonly external = input<boolean>(false);

  /** Animation de l'icône — `bob` (par défaut), `bob-sway` ou `none`. */
  readonly animation = input<DsActionCardAnimation>('bob');
}
