import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsButton } from './button';

type Story = StoryObj<DsButton>;

/**
 * Directive `dsButton` à poser sur `<button>` ou `<a>`. 3 variants :
 *
 * - `primary` (défaut) : violet plein (`--ds-primary`), texte blanc — CTA principal.
 * - `secondary` : ghost (transparent, bordure + texte selon tokens `--ds-button-secondary-*`)
 *   — la palette s'adapte automatiquement jour/nuit (violet plein lisible sur fond clair en jour).
 * - `danger` : rouge (`--mat-sys-error`) — pour les actions destructives.
 *
 * États : `:hover`, `:focus-visible` (outline accent violet), `:disabled` (opacité 0.4).
 *
 * Bascule la toolbar « Thème » pour valider notamment le variant `secondary`
 * dont la couleur change entre nuit (texte clair, bordure blanche translucide)
 * et jour (texte violet plein, bordure violet semi-opaque).
 */
const meta: Meta<DsButton> = {
  title: 'Components/Button',
  component: DsButton,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsButton],
    }),
  ],
  argTypes: {
    dsButton: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Variant visuel du bouton.',
    },
  },
};

export default meta;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<button [dsButton]="dsButton">Voir mes services</button>`,
  }),
  args: { dsButton: 'primary' },
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<button [dsButton]="dsButton">Lire le blog</button>`,
  }),
  args: { dsButton: 'secondary' },
};

export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: `<button [dsButton]="dsButton">Supprimer</button>`,
  }),
  args: { dsButton: 'danger' },
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <button dsButton="primary" disabled>Primary</button>
        <button dsButton="secondary" disabled>Secondary</button>
        <button dsButton="danger" disabled>Danger</button>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
        <button dsButton="primary">Voir mes services</button>
        <button dsButton="secondary">Lire le blog</button>
        <button dsButton="danger">Supprimer</button>
      </div>
    `,
  }),
};
