import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsBurger } from './burger';
import { DsDrawer } from './drawer';
import { DsSidenavHeader } from './sidenav-header';
import { DsSidenavBody } from './sidenav-body';

/**
 * `DsBurger` + `DsDrawer` — navigation mobile.
 *
 * Le bouton burger ouvre un panneau glissant (overlay assombri) qui héberge
 * un `DsSidenavHeader` et un contenu `[dsSidenavBody]`. Les deux composants
 * partagent le même signal `open` via un binding two-way.
 *
 * Accessibilité : `aria-expanded`/`aria-controls` sur le burger, panneau en
 * `role="dialog"` + `aria-modal`, focus piégé et restitué, fermeture au clic
 * sur le scrim et à `Escape`.
 */
@Component({
  selector: 'ds-story-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBurger, DsDrawer, DsSidenavHeader, DsSidenavBody],
  template: `
    <div
      style="height: 360px; display: flex; align-items: flex-start; padding: 20px;
             background: var(--ds-bg);"
    >
      <ds-burger [(open)]="open" controls="story-drawer" label="Ouvrir le menu" />
    </div>

    <ds-drawer [(open)]="open" id="story-drawer" [side]="side" label="Navigation">
      <ds-sidenav-header (closed)="open.set(false)">Codelyr</ds-sidenav-header>
      <nav dsSidenavBody>
        <span class="ds-sidenav-nav-label">// NAVIGATION</span>
        <a class="ds-sidenav-nav-link active" href="#">Tableau de bord</a>
        <a class="ds-sidenav-nav-link" href="#">Projets</a>
        <a class="ds-sidenav-nav-link" href="#">Blog</a>
        <div class="ds-sidenav-divider"></div>
        <a class="ds-sidenav-nav-link" href="#">Paramètres</a>
      </nav>
    </ds-drawer>
  `,
})
class StoryDrawer {
  readonly open = signal(false);
  side: 'left' | 'right' = 'left';
}

const meta: Meta<StoryDrawer> = {
  title: 'Components/Drawer',
  component: StoryDrawer,
  decorators: [moduleMetadata({ imports: [StoryDrawer] })],
  argTypes: {
    side: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Côté d’apparition du panneau.',
    },
  },
};
export default meta;

type Story = StoryObj<StoryDrawer>;

export const Default: Story = {
  args: { side: 'left' },
};

export const RightSide: Story = {
  args: { side: 'right' },
};
