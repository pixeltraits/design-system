import type { Meta, StoryObj } from '@storybook/angular';
import { DsSectionHeader } from './section-header';

const meta: Meta<DsSectionHeader> = {
  title: 'Components/SectionHeader',
  component: DsSectionHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsSectionHeader>;

export const WithTitle: Story = {
  render: () => ({
    template: `<ds-section-header tag="// SERVICES" title="Ce que je fais"></ds-section-header>`,
  }),
};

export const TagOnly: Story = {
  render: () => ({
    template: `<ds-section-header tag="// PROJETS"></ds-section-header>`,
  }),
};
