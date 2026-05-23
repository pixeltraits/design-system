import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsCodeBlock } from './code-block';

/**
 * Bloc de code avec bouton « Copier » intégré.
 *
 * - Fond sombre conservé même en mode jour (lisibilité du code monospace) ;
 *   seul le bouton copier adopte la palette du thème courant.
 * - Le bouton apparaît au hover / focus du bloc (sauf sur les écrans tactiles
 *   où il reste visible en permanence).
 * - Après un clic réussi, l'état `is-copied` affiche un retour vert pendant
 *   ~2 s puis revient à la normale.
 * - Les libellés `copyLabel` et `copiedLabel` sont overridables pour l'i18n.
 *
 * A11y :
 *   - `<button>` natif avec `aria-label` dynamique reflétant l'état courant
 *   - l'animation de succès dépend uniquement de la couleur ET du libellé
 *     (pas seulement la couleur → respect du critère 1.4.1)
 */
const meta: Meta<DsCodeBlock> = {
  title: 'Components/CodeBlock',
  component: DsCodeBlock,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsCodeBlock],
    }),
  ],
  argTypes: {
    code: {
      control: 'text',
      description: 'Contenu à afficher et à copier.',
    },
    copyLabel: {
      control: 'text',
      description: 'Libellé du bouton au repos.',
    },
    copiedLabel: {
      control: 'text',
      description: 'Libellé du bouton ~2 s après un clic réussi.',
    },
  },
};

export default meta;
type Story = StoryObj<DsCodeBlock>;

/** Snippet bash typique — survol pour voir le bouton copier apparaître. */
export const Bash: Story = {
  args: {
    code: '$ npm install @codelyr/design-system\n$ ng add @angular/material',
    copyLabel: 'Copier',
    copiedLabel: 'Copié',
  },
  render: (args) => ({
    props: args,
    template: `<ds-code-block [code]="code" [copyLabel]="copyLabel" [copiedLabel]="copiedLabel" />`,
  }),
};

/** Snippet TypeScript multi-lignes. */
export const TypeScript: Story = {
  args: {
    code: `import { Component, inject, signal } from '@angular/core';

@Component({ selector: 'app-root', template: \`<h1>{{ greeting() }}</h1>\` })
export class App {
  protected readonly greeting = signal('Bonjour Codelyr');
}`,
    copyLabel: 'Copier',
    copiedLabel: 'Copié',
  },
  render: (args) => ({
    props: args,
    template: `<ds-code-block [code]="code" [copyLabel]="copyLabel" [copiedLabel]="copiedLabel" />`,
  }),
};

/** Snippet long avec scroll horizontal — le `<pre>` overflow-x: auto. */
export const LongLine: Story = {
  args: {
    code: 'export const VERY_LONG_TOKEN_LIST = [' +
      "'ds-primary', 'ds-primary-l', 'ds-accent', 'ds-accent-dim', 'ds-text', 'ds-text-muted', 'ds-text-muted2', 'ds-bg', 'ds-bg2', 'ds-bg3', 'ds-border', 'ds-border2'" +
      '] as const;',
    copyLabel: 'Copier',
    copiedLabel: 'Copié',
  },
  render: (args) => ({
    props: args,
    template: `<ds-code-block [code]="code" [copyLabel]="copyLabel" [copiedLabel]="copiedLabel" />`,
  }),
};

/** Personnalisation des libellés (i18n). */
export const CustomLabels: Story = {
  args: {
    code: 'git clone https://github.com/codelyr/design-system.git',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
  },
  render: (args) => ({
    props: args,
    template: `<ds-code-block [code]="code" [copyLabel]="copyLabel" [copiedLabel]="copiedLabel" />`,
  }),
};
