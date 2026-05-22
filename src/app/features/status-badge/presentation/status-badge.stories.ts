import type { Meta, StoryObj } from '@storybook/angular';
import { DsStatusBadge } from './status-badge';

/**
 * Pastille d'état avec dot pulsant — 3 niveaux (disponible / avertissement /
 * indisponible). La sémantique est portée à la fois par la couleur ET le
 * libellé textuel (respect WCAG 1.4.1 — info pas véhiculée par la couleur seule).
 *
 * Palette pilotée par tokens DS (`--ds-status-{available,warning,unavailable}-{bg,border,color,dot}`)
 * qui basculent automatiquement entre les variantes jour et nuit via
 * `[data-theme]`. Pour tester : utilise la toolbar « Thème » en haut.
 */
const meta: Meta<DsStatusBadge> = {
  title: 'Components/StatusBadge',
  component: DsStatusBadge,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['available', 'warning', 'unavailable'],
      description: 'Niveau d’état — pilote couleur du fond, bordure, dot et libellé.',
    },
  },
};

export default meta;
type Story = StoryObj<DsStatusBadge>;

export const Available: Story = {
  args: { state: 'available' },
  render: (args) => ({
    props: args,
    template: `<ds-status-badge [state]="state">Disponible pour de nouvelles missions</ds-status-badge>`,
  }),
};

export const Warning: Story = {
  args: { state: 'warning' },
  render: (args) => ({
    props: args,
    template: `<ds-status-badge [state]="state">Disponibilité limitée</ds-status-badge>`,
  }),
};

export const Unavailable: Story = {
  args: { state: 'unavailable' },
  render: (args) => ({
    props: args,
    template: `<ds-status-badge [state]="state">Non disponible</ds-status-badge>`,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ds-status-badge state="available">Disponible pour de nouvelles missions</ds-status-badge>
        <ds-status-badge state="warning">Disponibilité limitée</ds-status-badge>
        <ds-status-badge state="unavailable">Non disponible</ds-status-badge>
      </div>
    `,
  }),
};
