import type { Meta, StoryObj } from '@storybook/angular';
import { DsBadge } from './badge';

/**
 * Étiquette compacte façon « pill » pour annoter du contenu (tag d'article,
 * nom de stack, label de status court).
 *
 * Trois variants :
 *   - `default` (sans input) : fond neutre, bordure et texte gris
 *   - `primary` : accent violet
 *   - `accent`  : accent orange
 *
 * Palette via tokens DS (`--ds-badge-*`, `--ds-badge-primary-*`, `--ds-badge-accent-*`)
 * → bascule jour/nuit automatique via `[data-theme]`. Bascule la toolbar
 * « Thème » pour valider les contrastes dans les deux modes.
 */
const meta: Meta<DsBadge> = {
  title: 'Components/Badge',
  component: DsBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsBadge>;

/** Variant neutre — fond `--ds-badge-bg`, texte `--ds-badge-color`. */
export const Default: Story = {
  render: () => ({
    template: `<span dsBadge>TypeScript</span>`,
  }),
};

/** Accent violet pour mettre en avant la stack principale. */
export const Primary: Story = {
  render: () => ({
    template: `<span dsBadge="primary">Angular</span>`,
  }),
};

/** Accent orange pour les nouveautés ou les promos. */
export const Accent: Story = {
  render: () => ({
    template: `<span dsBadge="accent">New</span>`,
  }),
};

/** Tous les variants sur une même ligne pour comparer la palette courante. */
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <span dsBadge>TypeScript</span>
        <span dsBadge="primary">Angular</span>
        <span dsBadge="accent">New</span>
        <span dsBadge>Node.js</span>
        <span dsBadge="primary">RxJS</span>
        <span dsBadge="accent">v2</span>
      </div>
    `,
  }),
};
