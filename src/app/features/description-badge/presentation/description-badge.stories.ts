import type { Meta, StoryObj } from '@storybook/angular';
import { DsDescriptionBadge } from './description-badge';

const meta: Meta<DsDescriptionBadge> = {
  title: 'Components/DescriptionBadge',
  component: DsDescriptionBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsDescriptionBadge>;

export const Default: Story = {
  render: () => ({
    template: `
      <ds-description-badge
        company="Acme Corp"
        role="Développeur Frontend Senior"
        period="2023 — présent"
      ></ds-description-badge>
    `,
  }),
};
