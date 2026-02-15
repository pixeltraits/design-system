import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsSkeletonLoader } from './skeleton-loader';
import { DsSkeletonLoaderGroup } from './skeleton-loader-group';

type Story = StoryObj<DsSkeletonLoader>;

const meta: Meta<DsSkeletonLoader> = {
  title: 'Components/Skeleton Loader',
  component: DsSkeletonLoader,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsSkeletonLoader, DsSkeletonLoaderGroup],
    }),
  ],
};

export default meta;

export const Wave: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 300px;">
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 20px; border-radius: 4px;"></div>
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 20px; border-radius: 4px; width: 80%;"></div>
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 20px; border-radius: 4px; width: 60%;"></div>
      </div>
    `,
  }),
};

export const Pulse: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 300px;">
        <div dsSkeletonLoader [loading]="true" variant="pulse"
             style="height: 20px; border-radius: 4px;"></div>
        <div dsSkeletonLoader [loading]="true" variant="pulse"
             style="height: 20px; border-radius: 4px; width: 80%;"></div>
        <div dsSkeletonLoader [loading]="true" variant="pulse"
             style="height: 20px; border-radius: 4px; width: 60%;"></div>
      </div>
    `,
  }),
};

export const Static: Story = {
  render: () => ({
    template: `
      <div dsSkeletonLoader [loading]="true" variant="static"
           style="height: 20px; border-radius: 4px; width: 200px;"></div>
    `,
  }),
};

export const CardPlaceholder: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 320px; padding: 24px; border: 1px solid var(--mat-sys-outline-variant); border-radius: 12px;">
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 180px; border-radius: 8px;"></div>
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 24px; border-radius: 4px; width: 70%;"></div>
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 16px; border-radius: 4px;"></div>
        <div dsSkeletonLoader [loading]="true" variant="wave"
             style="height: 16px; border-radius: 4px; width: 90%;"></div>
      </div>
    `,
  }),
};

export const Group: Story = {
  render: () => ({
    template: `
      <div [dsSkeletonLoaderGroup]="true"
           style="display: flex; flex-direction: column; gap: 12px; max-width: 300px;">
        <div dsSkeletonLoader style="height: 20px; border-radius: 4px;"></div>
        <div dsSkeletonLoader style="height: 20px; border-radius: 4px; width: 80%;"></div>
        <div dsSkeletonLoader style="height: 20px; border-radius: 4px; width: 60%;"></div>
      </div>
    `,
  }),
};
