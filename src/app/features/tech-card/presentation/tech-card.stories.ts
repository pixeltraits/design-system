import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsTechCard } from './tech-card';

/**
 * Coquille standardisée pour les cards des sections « savoir-faire » et
 * « portfolio ». Directive marqueur qui pose la classe globale `.ds-tech-card`
 * sur l'élément hôte — les styles eux-mêmes vivent dans `styles/_theme.scss`
 * (chargés via `@include ds.theme()`).
 *
 * Tokens dédiés :
 *   - `--ds-tech-card-bg`
 *   - `--ds-tech-card-border`
 *   - `--ds-tech-card-hover-border`
 *
 * Surface : fond, bordure, padding 22 px 20 px 20 px, border-radius 12 px,
 * overflow hidden. Au hover : bordure plus marquée + léger `translateY(-2px)`.
 * Le curseur n'est pas forcé — c'est à l'élément cliquable (lien, bouton)
 * imbriqué de le porter.
 *
 * Usage typique côté codelyr :
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { DsTechCard } from '@pixeltraits/design-system';
 *
 * @Component({
 *   selector: 'app-card-angular',
 *   hostDirectives: [DsTechCard],
 *   ...
 * })
 * export class CardAngular {}
 * ```
 *
 * La card spécifique garde ses propres styles internes (mock animé, label,
 * caption…) et ne définit plus son `:host` visuel (bg, bordure, hover).
 */
const meta: Meta<DsTechCard> = {
  title: 'Components/TechCard',
  component: DsTechCard,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsTechCard],
    }),
  ],
};

export default meta;
type Story = StoryObj<DsTechCard>;

/**
 * Coquille seule — démonstration de l'apparence (bg, bordure, padding, hover).
 * Hover la card pour voir la bordure violette et le `translateY` négatif.
 */
export const Empty: Story = {
  render: () => ({
    template: `
      <div dsTechCard style="width: 340px; height: 412px;">
        <p style="color: var(--ds-text-muted2); text-align: center;">.ds-tech-card</p>
      </div>
    `,
  }),
};

/**
 * Pattern card savoir-faire — directive sur le host + contenu typique
 * (label haut, visuel central, caption bas).
 */
export const SavoirFairePattern: Story = {
  render: () => ({
    template: `
      <div dsTechCard style="width: 340px; height: 412px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 13px; font-weight: 500; color: var(--ds-text);">Angular</span>
          <span style="font-size: 10px; font-family: var(--ds-font-mono); color: var(--ds-text-muted2); text-transform: uppercase; letter-spacing: 1px;">FRONT-END</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <div style="width: 120px; height: 120px; border-radius: 8px; background: linear-gradient(135deg, #ed1aa1 0%, #a824f2 100%);"></div>
        </div>
        <p style="font-size: 12px; color: var(--ds-text-muted); text-align: center; line-height: 1.55;">
          Framework complet et structurant : signals, composants standalone,
          TypeScript natif et un outillage puissant.
        </p>
      </div>
    `,
  }),
};

/**
 * Grille de 3 cards — disposition typique « savoir-faire » de la home.
 * Survol chacune pour valider que l'animation hover est par-card (pas globale).
 */
export const Grid: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <div dsTechCard style="width: 280px; height: 320px;">
          <span style="font-size: 13px; font-weight: 500; color: var(--ds-text);">Angular</span>
        </div>
        <div dsTechCard style="width: 280px; height: 320px;">
          <span style="font-size: 13px; font-weight: 500; color: var(--ds-text);">Storybook</span>
        </div>
        <div dsTechCard style="width: 280px; height: 320px;">
          <span style="font-size: 13px; font-weight: 500; color: var(--ds-text);">DevOps</span>
        </div>
      </div>
    `,
  }),
};
