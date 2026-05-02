import type { Meta, StoryObj } from '@storybook/angular';
import { DsStatusBadge } from './status-badge';

const meta: Meta<DsStatusBadge> = {
  title: 'Components/StatusBadge',
  component: DsStatusBadge,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['available', 'warning', 'unavailable'],
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
