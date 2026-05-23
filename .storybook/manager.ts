import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
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
  }),
});
