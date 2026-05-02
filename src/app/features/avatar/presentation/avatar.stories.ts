import type { Meta, StoryObj } from '@storybook/angular';
import { DsAvatar } from './avatar';

const meta: Meta<DsAvatar> = {
  title: 'Components/Avatar',
  component: DsAvatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsAvatar>;

export const WithInitials: Story = {
  render: () => ({
    template: `<ds-avatar initials="EM" alt="Erwan Moreau"></ds-avatar>`,
  }),
};

export const WithImage: Story = {
  render: () => ({
    template: `<ds-avatar src="https://i.pravatar.cc/56" alt="Photo de profil"></ds-avatar>`,
  }),
};
