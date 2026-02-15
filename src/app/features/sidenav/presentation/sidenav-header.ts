import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { DsIcon } from '@features/icon/presentation/icon';

@Component({
  selector: 'ds-sidenav-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsIcon],
  host: {
    class: 'ds-sidenav-header',
  },
  template: `
    <span class="ds-sidenav-header__title"><ng-content /></span>
    <button
      type="button"
      class="ds-sidenav-header__close"
      aria-label="Close navigation"
      (click)="closed.emit()">
      <ds-icon icon="xmark" size="md" />
    </button>
  `,
})
export class DsSidenavHeader {
  closed = output<void>();
}
