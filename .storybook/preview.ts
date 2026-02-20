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
    docs: {
      theme: create({
        base: 'light',
        fontBase: '"Roboto", "Helvetica Neue", Arial, sans-serif',
        fontCode: '"Roboto Mono", monospace',
        textColor: '#1a1a1a',
      }),
    },
  },
};

export default preview;
