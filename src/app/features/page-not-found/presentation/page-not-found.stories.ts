import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { DsPageNotFound } from './page-not-found';
import { DS_ICONS, DsIconName } from '@features/icon/presentation/icon-registry';

type Story = StoryObj<DsPageNotFound>;

const meta: Meta<DsPageNotFound> = {
  title: 'Components/Page Not Found',
  component: DsPageNotFound,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsPageNotFound],
    }),
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(DS_ICONS) as DsIconName[],
    },
    title: { control: 'text' },
    buttonText: { control: 'text' },
    link: { control: 'text' },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 80vh;">
        <ds-page-not-found [icon]="icon" [title]="title" [buttonText]="buttonText" [link]="link" />
      </div>
    `,
  }),
  args: {
    icon: 'circle-exclamation',
    title: 'Page not found',
    buttonText: 'Back to home',
    link: '/',
  },
};

export const CustomContent: Story = {
  render: () => ({
    template: `
      <div style="height: 80vh;">
        <ds-page-not-found
          icon="lock"
          title="Access denied"
          buttonText="Sign in"
          link="/login"
        />
      </div>
    `,
  }),
};
