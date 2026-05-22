import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';

/**
 * Panneau de navigation glissant (overlay) — scrim assombri + panneau latéral.
 *
 * Conçu pour héberger un `DsSidenavHeader` et un contenu `[dsSidenavBody]`,
 * projetés via `<ng-content>`.
 *
 * - `open` : bindable two-way — typiquement partagé avec un `DsBurger`.
 * - Se ferme au clic sur le scrim et à la touche `Escape`.
 * - Piège le focus dans le panneau (`cdkTrapFocus`) et le restitue au
 *   déclencheur à la fermeture (`cdkTrapFocusAutoCapture`).
 */
@Component({
  selector: 'ds-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkTrapFocus],
  styleUrl: './drawer.scss',
  host: {
    '(document:keydown.escape)': 'open.set(false)',
  },
  template: `
    @if (open()) {
      <!-- Scrim cliquable pour fermer (souris). L'équivalent clavier est
           assuré par Escape (host listener) et le bouton de fermeture du
           header — le scrim n'a donc pas de rôle interactif ARIA. -->
      <!-- eslint-disable-next-line @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
      <div class="ds-drawer-scrim" (click)="onScrimClick($event)">
        <div
          class="ds-drawer-panel"
          [class.ds-drawer-panel--right]="side() === 'right'"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="label()"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
        >
          <ng-content />
        </div>
      </div>
    }
  `,
})
export class DsDrawer {
  /** État ouvert/fermé — bindable two-way. */
  readonly open = model(false);
  /** Côté d'apparition du panneau. */
  readonly side = input<'left' | 'right'>('left');
  /** Libellé accessible du dialogue. */
  readonly label = input('Navigation');

  // Ne ferme que si le clic vise le scrim lui-même — un clic dans le panneau
  // ne propage donc pas la fermeture.
  protected onScrimClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.open.set(false);
    }
  }
}
