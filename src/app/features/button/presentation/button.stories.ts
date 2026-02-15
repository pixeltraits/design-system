import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsButton } from './button';

type Story = StoryObj<DsButton>;

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
    },
  },
};

export default meta;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<button [dsButton]="dsButton">Primary</button>`,
  }),
  args: { dsButton: 'primary' },
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<button [dsButton]="dsButton">Secondary</button>`,
  }),
  args: { dsButton: 'secondary' },
};

export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: `<button [dsButton]="dsButton">Danger</button>`,
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
      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <button dsButton="primary">Primary</button>
        <button dsButton="secondary">Secondary</button>
        <button dsButton="danger">Danger</button>
      </div>
      <div style="display: flex; gap: 16px; align-items: center;">
        <button dsButton="primary" disabled>Primary</button>
        <button dsButton="secondary" disabled>Secondary</button>
        <button dsButton="danger" disabled>Danger</button>
      </div>
    `,
  }),
};
