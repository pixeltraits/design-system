import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
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
    // Signal partagé entre toutes les cellules : le nom de la dernière
    // icône copiée. Permet d'afficher un feedback "Copié !" ~1.5 s sur la
    // cellule cliquée (zoneless friendly, contrairement à un POJO).
    const copied = signal<string>('');
    let timer: ReturnType<typeof setTimeout> | undefined;

    const copy = async (name: string): Promise<void> => {
      try {
        await navigator.clipboard.writeText(name);
        copied.set(name);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => copied.set(''), 1500);
      } catch {
        // clipboard API indisponible — silent fail
      }
    };

    return {
      props: { icons, copied, copy },
      template: `
        <style>
          .ds-icon-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 8px;
          }
          .ds-icon-gallery-cell {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding: 16px 8px;
            border-radius: 8px;
            /* Liseré discret au repos pour signaler l'interactivité — teinté
               primary translucide, plus visible que la bordure outline neutre. */
            border: 1px solid color-mix(in srgb, var(--mat-sys-primary) 22%, transparent);
            background: color-mix(in srgb, var(--mat-sys-primary) 3%, transparent);
            color: inherit;
            cursor: pointer;
            font-family: inherit;
            transition: border-color 0.2s ease, background-color 0.2s ease,
                        transform 0.18s ease, box-shadow 0.2s ease;
          }
          .ds-icon-gallery-cell:hover {
            border-color: var(--mat-sys-primary);
            background: color-mix(in srgb, var(--mat-sys-primary) 8%, transparent);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px color-mix(in srgb, var(--mat-sys-primary) 18%, transparent);
          }
          .ds-icon-gallery-cell:active {
            transform: translateY(-1px);
          }
          .ds-icon-gallery-cell:focus-visible {
            outline: 2px solid var(--mat-sys-primary);
            outline-offset: 2px;
          }
          .ds-icon-gallery-cell.is-copied,
          .ds-icon-gallery-cell.is-copied:hover {
            border-color: rgba(63, 185, 80, 0.55);
            background: rgba(63, 185, 80, 0.10);
            box-shadow: none;
            transform: none;
          }
          .ds-icon-gallery-cell .ds-icon-gallery-label {
            font-size: 11px;
            text-align: center;
            word-break: break-all;
            color: var(--mat-sys-on-surface-variant);
            transition: color 0.2s ease;
          }
          .ds-icon-gallery-cell.is-copied .ds-icon-gallery-label {
            color: #3fb950;
          }
        </style>
        <div class="ds-icon-gallery">
          @for (name of icons; track name) {
            <button
              type="button"
              class="ds-icon-gallery-cell"
              [class.is-copied]="copied() === name"
              (click)="copy(name)"
              [attr.aria-label]="'Copier le nom ' + name"
              [title]="copied() === name ? 'Copié !' : 'Cliquer pour copier le nom'"
            >
              <ds-icon [icon]="name" size="lg" />
              <code class="ds-icon-gallery-label">
                {{ copied() === name ? 'Copié !' : name }}
              </code>
            </button>
          }
        </div>
      `,
    };
  },
};
