import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsActionCard } from './action-card';

/**
 * Card-CTA verticale icône XL + label, conçue pour les sections « Contact »
 * d'une home (mail, LinkedIn, GitHub…). Trois animations d'icône disponibles :
 *
 * - `bob` (défaut) : translation verticale douce + léger scale.
 * - `bob-sway` : variante avec rotation alternée (idéal pour l'enveloppe mail).
 * - `none` : pas d'animation (respect `prefers-reduced-motion` est déjà géré).
 *
 * Palette pilotée par tokens DS (`--ds-action-card-*`) qui suivent le thème
 * jour / nuit. Pour customiser ponctuellement la couleur d'icône (ex. brand
 * LinkedIn en violet), poser `[style.--ds-action-card-icon-color]` sur l'host.
 *
 * Les liens externes ajoutent automatiquement `target="_blank"` et
 * `rel="noopener noreferrer"` + un `aria-label` qui annonce l'ouverture
 * dans un nouvel onglet.
 */
const meta: Meta<DsActionCard> = {
  title: 'Components/ActionCard',
  component: DsActionCard,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsActionCard],
    }),
  ],
  argTypes: {
    href: { control: 'text', description: 'Cible du lien.' },
    label: { control: 'text', description: 'Libellé affiché sous l’icône.' },
    icon: { control: 'text', description: 'Nom d’icône DsIcon (cf. DsIconName).' },
    external: { control: 'boolean', description: 'Si true, `target="_blank" rel="noopener noreferrer"`.' },
    animation: {
      control: 'select',
      options: ['bob', 'bob-sway', 'none'],
      description: 'Animation de l’icône.',
    },
  },
};

export default meta;
type Story = StoryObj<DsActionCard>;

/** CTA mail avec animation oscillante (sway). */
export const Mail: Story = {
  args: {
    href: 'mailto:hello@example.com',
    icon: 'envelope',
    label: 'hello@example.com',
    external: false,
    animation: 'bob-sway',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 260px;">
        <ds-action-card [href]="href" [icon]="icon" [label]="label" [external]="external" [animation]="animation" />
      </div>
    `,
  }),
};

/** CTA LinkedIn externe avec brand color override sur l'icône. */
export const LinkedIn: Story = {
  args: {
    href: 'https://www.linkedin.com',
    icon: 'linkedin',
    label: 'LinkedIn — Mon profil',
    external: true,
    animation: 'bob',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 260px;">
        <ds-action-card
          [href]="href"
          [icon]="icon"
          [label]="label"
          [external]="external"
          [animation]="animation"
          [style.--ds-action-card-icon-color]="'var(--ds-primary)'"
        />
      </div>
    `,
  }),
};

/** CTA GitHub externe, animation bob standard. */
export const GitHub: Story = {
  args: {
    href: 'https://github.com/codelyr',
    icon: 'github',
    label: 'GitHub — codelyr',
    external: true,
    animation: 'bob',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 260px;">
        <ds-action-card [href]="href" [icon]="icon" [label]="label" [external]="external" [animation]="animation" />
      </div>
    `,
  }),
};

/**
 * Trio aligné, comme dans la section contact de la home. Les délais
 * d'animation sont décalés (0 s / 0.6 s / 1.2 s) via la custom prop
 * `--ds-action-card-icon-delay` pour donner un effet « vague ».
 */
export const ContactRow: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; max-width: 760px;">
        <ds-action-card
          href="mailto:hello@example.com"
          icon="envelope"
          label="hello@example.com"
          animation="bob-sway"
          [style.--ds-action-card-icon-delay]="'0s'"
        />
        <ds-action-card
          href="https://www.linkedin.com"
          icon="linkedin"
          label="LinkedIn"
          [external]="true"
          [style.--ds-action-card-icon-color]="'var(--ds-primary)'"
          [style.--ds-action-card-icon-delay]="'0.6s'"
        />
        <ds-action-card
          href="https://github.com/codelyr"
          icon="github"
          label="GitHub"
          [external]="true"
          [style.--ds-action-card-icon-delay]="'1.2s'"
        />
      </div>
    `,
  }),
};
