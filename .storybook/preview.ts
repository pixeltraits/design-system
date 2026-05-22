import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { applicationConfig, type Decorator, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { create } from 'storybook/theming';
import docJson from '../documentation.json';

setCompodocJson(docJson);

/**
 * Decorator : applique le mode jour / nuit du DS via l'attribut `[data-theme]`
 * sur `<html>` (cf. `styles/_theme.scss` qui cascade depuis cet attribut).
 *
 * Le mode est piloté par la globale `theme` exposée dans la toolbar.
 */
const withDsTheme: Decorator = (storyFn, context) => {
  const theme = (context.globals['theme'] as 'night' | 'day') ?? 'night';
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
  return storyFn();
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Palette DS (`<html data-theme>`)',
      defaultValue: 'night',
      toolbar: {
        title: 'Thème',
        icon: 'paintbrush',
        items: [
          { value: 'night', title: 'Nuit', icon: 'moon' },
          { value: 'day', title: 'Jour', icon: 'sun' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideZonelessChangeDetection(), provideAnimationsAsync()],
    }),
    withDsTheme,
  ],
  parameters: {
    options: {
      // Sidebar : « Docs » en premier (Getting Started → Theme → Tokens → Icons),
      // puis les composants triés alphabétiquement.
      storySort: {
        order: [
          'Docs',
          ['Getting Started', 'Theme & Day-Night', 'Design Tokens', 'Icons', 'Accessibility'],
          'Components',
        ],
      },
    },
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
        { name: 'cream', value: '#f2ecdd' },
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
