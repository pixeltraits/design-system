import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DsIcon } from '@features/icon/presentation/icon';
import { DsButton } from '@features/button/presentation/button';
import { DsIconName } from '@features/icon/presentation/icon-registry';

@Component({
  selector: 'ds-page-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsIcon, DsButton, RouterLink],
  host: { 'class': 'ds-page-not-found' },
  template: `
    <div class="ds-page-not-found__content">
      <ds-icon [icon]="icon()" size="xl" />
      <h4 class="ds-page-not-found__title">{{ title() }}</h4>
      <a dsButton="primary" [routerLink]="link()">{{ buttonText() }}</a>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .ds-page-not-found__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      gap: 2rem;
      width: 50%;
      min-height: 0;
    }

    .ds-page-not-found__title {
      font: var(--mat-sys-headline-small);
      color: var(--mat-sys-on-surface);
      margin: 0;
    }
  `,
})
export class DsPageNotFound {
  icon = input<DsIconName>('circle-exclamation');
  title = input('Page not found');
  buttonText = input('Back to home');
  link = input('/');
}
