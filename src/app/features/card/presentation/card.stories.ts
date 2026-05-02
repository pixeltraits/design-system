import type { Meta, StoryObj } from '@storybook/angular';
import { DsCard } from './card';

const meta: Meta<DsCard> = {
  title: 'Components/Card',
  component: DsCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsCard>;

export const Default: Story = {
  render: () => ({
    template: `
      <ds-card title="Design System" description="Un système de composants réutilisables construit avec Angular et Angular Material.">
        <span dsCardIcon>✦</span>
      </ds-card>
    `,
  }),
};

export const WithoutIcon: Story = {
  render: () => ({
    template: `
      <ds-card title="Architecture hexagonale" description="Séparation stricte des couches domaine, application, infrastructure et présentation."></ds-card>
    `,
  }),
};
