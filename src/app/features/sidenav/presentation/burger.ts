import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

/**
 * Bouton « burger » — déclencheur d'une navigation mobile (`DsDrawer`).
 *
 * Trois traits, accessible : `aria-expanded` reflète l'état d'ouverture,
 * `aria-controls` pointe vers le drawer contrôlé.
 *
 * `open` est bindable en two-way — on le partage généralement avec le
 * `DsDrawer` associé :
 *
 * ```html
 * <ds-burger [(open)]="menuOpen" controls="main-drawer" />
 * <ds-drawer [(open)]="menuOpen" id="main-drawer"> … </ds-drawer>
 * ```
 */
@Component({
  selector: 'ds-burger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './burger.scss',
  template: `
    <button
      type="button"
      class="ds-burger"
      [attr.aria-label]="label()"
      [attr.aria-expanded]="open()"
      [attr.aria-controls]="controls() || null"
      aria-haspopup="dialog"
      (click)="open.set(!open())"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  `,
})
export class DsBurger {
  /** État ouvert/fermé — bindable two-way avec le `DsDrawer` associé. */
  readonly open = model(false);
  /** Libellé accessible du bouton. */
  readonly label = input('Open menu');
  /** `id` de l'élément contrôlé (le drawer) — pose `aria-controls`. */
  readonly controls = input<string>();
}
