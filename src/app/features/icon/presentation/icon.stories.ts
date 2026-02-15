import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsIcon } from './icon';
import { DS_ICONS, DsIconName } from './icon-registry';

type Story = StoryObj<DsIcon>;

const allIconNames = Object.keys(DS_ICONS) as DsIconName[];

const meta: Meta<DsIcon> = {
  title: 'Components/Icon',
  component: DsIcon,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsIcon],
    }),
  ],
  argTypes: {
    icon: {
      control: 'select',
      options: allIconNames,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-icon [icon]="icon" [size]="size" [label]="label" />`,
  }),
  args: { icon: 'star', size: 'md' },
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <ds-icon icon="star" size="sm" />
        <ds-icon icon="star" size="md" />
        <ds-icon icon="star" size="lg" />
        <ds-icon icon="star" size="xl" />
      </div>
    `,
  }),
};

export const WithLabel: Story = {
  render: () => ({
    template: `<ds-icon icon="bell" label="Notifications" size="lg" />`,
  }),
};

export const Decorative: Story = {
  render: () => ({
    template: `<ds-icon icon="check" size="md" />`,
  }),
};

export const ColorInherited: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <span style="color: var(--mat-sys-primary);">
          <ds-icon icon="heart" size="lg" />
        </span>
        <span style="color: var(--mat-sys-error);">
          <ds-icon icon="heart" size="lg" />
        </span>
        <span style="color: var(--mat-sys-tertiary);">
          <ds-icon icon="heart" size="lg" />
        </span>
      </div>
    `,
  }),
};

export const SolidVsOutline: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center; font: var(--mat-sys-body-large);">
        <span style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <ds-icon icon="heart" size="lg" />
          <code>heart</code>
        </span>
        <span style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <ds-icon icon="heart-outline" size="lg" />
          <code>heart-outline</code>
        </span>
        <span style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <ds-icon icon="star" size="lg" />
          <code>star</code>
        </span>
        <span style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <ds-icon icon="star-outline" size="lg" />
          <code>star-outline</code>
        </span>
        <span style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <ds-icon icon="bell" size="lg" />
          <code>bell</code>
        </span>
        <span style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <ds-icon icon="bell-outline" size="lg" />
          <code>bell-outline</code>
        </span>
      </div>
    `,
  }),
};

export const Gallery: Story = {
  render: () => {
    const icons = allIconNames;
    return {
      props: { icons },
      template: `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 8px;">
          @for (name of icons; track name) {
            <div style="
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;
              padding: 16px 8px;
              border-radius: 8px;
              border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 30%, transparent);
            ">
              <ds-icon [icon]="name" size="lg" />
              <code style="font-size: 11px; color: var(--mat-sys-on-surface-variant); text-align: center; word-break: break-all;">{{ name }}</code>
            </div>
          }
        </div>
      `,
    };
  },
};
