import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { applicationConfig, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { create } from 'storybook/theming';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideZonelessChangeDetection(), provideAnimationsAsync()],
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#08080f' },
        { name: 'surface', value: '#0e0e1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: {
      theme: create({
        base: 'dark',
        fontBase: '"Space Grotesk", sans-serif',
        fontCode: '"Space Mono", monospace',
        colorPrimary: '#6b7aff',
        colorSecondary: '#6b7aff',
        appBg: '#0e0e1a',
        appContentBg: '#08080f',
        appPreviewBg: '#08080f',
        appBorderColor: 'rgba(91, 106, 255, 0.15)',
        textColor: '#e8e6f0',
        textMutedColor: '#9896a8',
        barBg: '#0e0e1a',
        inputBg: '#13131f',
        inputBorder: 'rgba(91, 106, 255, 0.15)',
        inputTextColor: '#e8e6f0',
      }),
    },
  },
};

export default preview;
