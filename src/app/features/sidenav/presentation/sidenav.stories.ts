import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DsSidenavHeader } from './sidenav-header';
import { DsSidenavBody } from './sidenav-body';

const CONTAINER_STYLES = 'height: 520px; background: var(--ds-bg);';
const CONTENT_STYLES = `
  padding: 28px 32px;
  font-family: var(--ds-font-sans);
  font-size: var(--ds-fs-body);
  color: var(--ds-text-muted);
  background: var(--ds-bg);
`;
const TOGGLE_BTN = `
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; border: 1px solid rgba(255,255,255,0.2);
  color: var(--ds-text); font-family: var(--ds-font-sans);
  font-size: 13px; padding: 8px 16px; border-radius: 6px; cursor: pointer;
`;

@Component({
  selector: 'ds-story-sidenav-default',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, DsSidenavHeader, DsSidenavBody],
  template: `
    <mat-sidenav-container [style]="containerStyles">
      <mat-sidenav #sidenav mode="side" opened style="width: 240px; background: var(--ds-bg2); border-right: 0.5px solid var(--ds-border);">
        <ds-sidenav-header (closed)="sidenav.close()">Codelyr</ds-sidenav-header>
        <nav dsSidenavBody>
          <span class="ds-sidenav-nav-label">// NAVIGATION</span>
          <a class="ds-sidenav-nav-link active" href="#">Tableau de bord</a>
          <a class="ds-sidenav-nav-link" href="#">Projets</a>
          <a class="ds-sidenav-nav-link" href="#">Blog</a>

          <div class="ds-sidenav-divider"></div>

          <span class="ds-sidenav-nav-label">// COMPTE</span>
          <a class="ds-sidenav-nav-link" href="#">Profil</a>
          <a class="ds-sidenav-nav-link" href="#">Paramètres</a>
        </nav>
        <div class="ds-sidenav-footer">v1.0.0 · Pixeltraits DS</div>
      </mat-sidenav>

      <mat-sidenav-content [style]="contentStyles">
        <button [style]="toggleBtn" (click)="sidenav.toggle()">☰ Menu</button>
        <p style="margin-top: 24px; line-height: 1.7;">Contenu principal de la page.</p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
class DefaultSidenavStory {
  containerStyles = CONTAINER_STYLES;
  contentStyles = CONTENT_STYLES;
  toggleBtn = TOGGLE_BTN;
}

@Component({
  selector: 'ds-story-sidenav-sections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, DsSidenavHeader, DsSidenavBody],
  template: `
    <mat-sidenav-container [style]="containerStyles">
      <mat-sidenav #sidenav mode="side" opened style="width: 240px; background: var(--ds-bg2); border-right: 0.5px solid var(--ds-border);">
        <ds-sidenav-header (closed)="sidenav.close()">Design System</ds-sidenav-header>
        <nav dsSidenavBody>
          <span class="ds-sidenav-nav-label">// FONDATIONS</span>
          <a class="ds-sidenav-nav-link" href="#">Couleurs</a>
          <a class="ds-sidenav-nav-link" href="#">Typographie</a>
          <a class="ds-sidenav-nav-link" href="#">Espacements</a>

          <div class="ds-sidenav-divider"></div>

          <span class="ds-sidenav-nav-label">// COMPOSANTS</span>
          <a class="ds-sidenav-nav-link active" href="#">Boutons</a>
          <a class="ds-sidenav-nav-link" href="#">Badges</a>
          <a class="ds-sidenav-nav-link" href="#">Cards</a>
          <a class="ds-sidenav-nav-link" href="#">Formulaires</a>
          <a class="ds-sidenav-nav-link" href="#">Tableaux</a>

          <div class="ds-sidenav-divider"></div>

          <span class="ds-sidenav-nav-label">// PATTERNS</span>
          <a class="ds-sidenav-nav-link" href="#">Navigation</a>
          <a class="ds-sidenav-nav-link" href="#">Dialogs</a>
        </nav>
        <div class="ds-sidenav-footer">@pixeltraits/design-system</div>
      </mat-sidenav>

      <mat-sidenav-content [style]="contentStyles">
        <button [style]="toggleBtn" (click)="sidenav.toggle()">☰ Menu</button>
        <p style="margin-top: 24px; line-height: 1.7;">Contenu principal.</p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
class SectionsSidenavStory {
  containerStyles = CONTAINER_STYLES;
  contentStyles = CONTENT_STYLES;
  toggleBtn = TOGGLE_BTN;
}

const meta: Meta = {
  title: 'Components/Sidenav',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DefaultSidenavStory, SectionsSidenavStory],
    }),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({ template: `<ds-story-sidenav-default />` }),
};

export const WithSections: Story = {
  render: () => ({ template: `<ds-story-sidenav-sections />` }),
};
