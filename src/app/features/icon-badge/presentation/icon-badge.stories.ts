import type { Meta, StoryObj } from '@storybook/angular';
import { DsIconBadge } from './icon-badge';

const meta: Meta<DsIconBadge> = {
  title: 'Components/IconBadge',
  component: DsIconBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsIconBadge>;

export const Primary: Story = {
  render: () => ({
    template: `<ds-icon-badge variant="primary">✦</ds-icon-badge>`,
  }),
};

export const Accent: Story = {
  render: () => ({
    template: `<ds-icon-badge variant="accent">⚡</ds-icon-badge>`,
  }),
};
