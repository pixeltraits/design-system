import { Directive } from '@angular/core';

/**
 * Coquille de card pour les sections « savoir-faire » et « portfolio » —
 * fond, bordure, hover, padding. À poser sur le host de la card spécifique :
 *
 * ```ts
 * @Component({
 *   selector: 'app-card-angular',
 *   hostDirectives: [DsTechCard],
 *   ...
 * })
 * ```
 *
 * Les styles eux-mêmes sont injectés globalement via `@include ds.theme()`
 * (cf. `styles/_theme.scss`) — la directive sert de marqueur sémantique.
 */
@Directive({
  selector: '[dsTechCard]',
  host: {
    class: 'ds-tech-card',
  },
})
export class DsTechCard {}
