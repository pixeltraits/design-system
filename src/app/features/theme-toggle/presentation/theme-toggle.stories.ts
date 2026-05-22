import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsThemeToggle } from './theme-toggle';

/**
 * Toggle segmenté à 3 états (nuit / défaut / jour) — icône lune, zéro, soleil.
 * Le composant expose un `model<DsThemeToggleValue>()` permettant le binding
 * bidirectionnel via `[(value)]`. Les couleurs des icônes lune (violet) et
 * soleil (orange) sont pilotées par des tokens DS (`--ds-toggle-moon-color`,
 * `--ds-toggle-sun-color`) qui s'adaptent automatiquement jour / nuit.
 *
 * Usage courant : posé dans une nav-bar pour piloter un service de thème
 * applicatif (cf. l'intégration dans codelyr avec `BlogThemeService`).
 *
 * A11y :
 *   - le conteneur est un `radiogroup` avec `aria-label`
 *   - chaque segment est un `radio` avec `aria-checked`
 *   - les icônes décoratives sont en `aria-hidden` (le segment porte le label)
 */
const meta: Meta<DsThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: DsThemeToggle,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DsThemeToggle],
    }),
  ],
  argTypes: {
    value: {
      control: 'select',
      options: ['night', 'normal', 'day'],
      description: 'État courant — `model()` bidirectionnel.',
    },
    ariaLabel: {
      control: 'text',
      description: "Étiquette accessible du groupe de boutons radio.",
    },
  },
};

export default meta;
type Story = StoryObj<DsThemeToggle>;

/** État initial sur **nuit** — la lune est mise en avant. */
export const Night: Story = {
  args: { value: 'night', ariaLabel: 'Mode d’affichage' },
  render: (args) => ({
    props: args,
    template: `<ds-theme-toggle [value]="value" [ariaLabel]="ariaLabel" />`,
  }),
};

/** État neutre **normal** — le `0` central est mis en avant. */
export const Normal: Story = {
  args: { value: 'normal', ariaLabel: 'Mode d’affichage' },
  render: (args) => ({
    props: args,
    template: `<ds-theme-toggle [value]="value" [ariaLabel]="ariaLabel" />`,
  }),
};

/** État **jour** — le soleil est mis en avant. */
export const Day: Story = {
  args: { value: 'day', ariaLabel: 'Mode d’affichage' },
  render: (args) => ({
    props: args,
    template: `<ds-theme-toggle [value]="value" [ariaLabel]="ariaLabel" />`,
  }),
};

/**
 * Binding bidirectionnel `[(value)]` — la story expose la valeur courante
 * pour montrer la propagation depuis le composant vers le parent.
 */
export const TwoWayBinding: Story = {
  render: () => ({
    props: { current: 'normal' },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <ds-theme-toggle [(value)]="current" ariaLabel="Mode d’affichage" />
        <code style="font-family: var(--ds-font-mono); color: var(--ds-text-muted);">
          value = '{{ current }}'
        </code>
      </div>
    `,
  }),
};
