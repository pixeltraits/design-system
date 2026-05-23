import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { applicationConfig, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { addons } from 'storybook/preview-api';
import { create } from 'storybook/theming';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import docJson from '../documentation.json';

setCompodocJson(docJson);

// ───────────────────────────────────────────────────────────────────────
// Thèmes manager (chrome Storybook : sidebar, topbar, docs)
// Pilotés par l'addon `storybook-dark-mode` qui ajoute un toggle 🌙/☀️
// dans la topbar et fait basculer la chrome + (via l'event ci-dessous)
// le `[data-theme]` du DS en un clic.
// ───────────────────────────────────────────────────────────────────────

const darkTheme = create({
  base: 'dark',
  brandTitle: 'Codelyr DS',
  fontBase: '"Space Grotesk", sans-serif',
  fontCode: '"Space Mono", monospace',
  colorPrimary: '#6b7aff',
  colorSecondary: '#6b7aff',
  appBg: '#0e0e1a',
  appContentBg: '#08080f',
  appPreviewBg: '#08080f',
  appBorderColor: 'rgba(91, 106, 255, 0.15)',
  appBorderRadius: 6,
  textColor: '#e8e6f0',
  textMutedColor: '#9896a8',
  barTextColor: '#9896a8',
  barHoverColor: '#e8e6f0',
  barSelectedColor: '#6b7aff',
  barBg: '#0e0e1a',
  inputBg: '#13131f',
  inputBorder: 'rgba(91, 106, 255, 0.15)',
  inputTextColor: '#e8e6f0',
  inputBorderRadius: 4,
});

const lightTheme = create({
  base: 'light',
  brandTitle: 'Codelyr DS',
  fontBase: '"Space Grotesk", sans-serif',
  fontCode: '"Space Mono", monospace',
  colorPrimary: '#4f5bd5',
  colorSecondary: '#4f5bd5',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: 'rgba(0, 0, 0, 0.10)',
  appBorderRadius: 6,
  textColor: '#1a1a1a',
  textMutedColor: '#55534c',
  barTextColor: '#55534c',
  barHoverColor: '#1a1a1a',
  barSelectedColor: '#4f5bd5',
  barBg: '#ffffff',
  inputBg: '#ffffff',
  inputBorder: 'rgba(0, 0, 0, 0.18)',
  inputTextColor: '#1a1a1a',
  inputBorderRadius: 4,
});

// Synchronise `<html data-theme="night|day">` avec le toggle de l'addon
// (cf. `styles/_theme.scss` qui cascade depuis cet attribut).
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'night');
  addons.getChannel().on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
    document.documentElement.setAttribute('data-theme', isDark ? 'night' : 'day');
  });
}

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideZonelessChangeDetection(), provideAnimationsAsync()],
    }),
  ],
  parameters: {
    darkMode: {
      current: 'dark',
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
    },
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
    // Toolbar `backgrounds` désactivé : il ne fait que teinter le canvas
    // (outil de test visuel) et prêtait à confusion avec le vrai toggle
    // jour/nuit fourni par `storybook-dark-mode`.
    backgrounds: { disable: true },
  },
};

export default preview;
