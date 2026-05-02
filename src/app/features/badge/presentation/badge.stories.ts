import type { Meta, StoryObj } from '@storybook/angular';
import { DsBadge } from './badge';

const meta: Meta<DsBadge> = {
  title: 'Components/Badge',
  component: DsBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsBadge>;

export const Default: Story = {
  render: () => ({
    template: `<span dsBadge>TypeScript</span>`,
  }),
};

export const Primary: Story = {
  render: () => ({
    template: `<span dsBadge="primary">Angular</span>`,
  }),
};

export const Accent: Story = {
  render: () => ({
    template: `<span dsBadge="accent">New</span>`,
  }),
};
