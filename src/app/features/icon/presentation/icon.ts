import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DS_ICONS, DsIconName } from './icon-registry';

export type DsIconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  host: {
    'class': 'ds-icon',
    '[class.ds-icon--sm]': 'size() === "sm"',
    '[class.ds-icon--md]': 'size() === "md"',
    '[class.ds-icon--lg]': 'size() === "lg"',
    '[class.ds-icon--xl]': 'size() === "xl"',
    '[attr.aria-hidden]': '!label() ? "true" : null',
    '[attr.aria-label]': 'label() || null',
    'role': 'img',
    '[attr.role]': 'label() ? "img" : null',
  },
  template: `<fa-icon [icon]="iconDef()" [a11yRole]="faRole()" />`,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: inherit;
    }
  `,
})
export class DsIcon {
  icon = input.required<DsIconName>();
  size = input<DsIconSize>('md');
  label = input<string>();

  protected iconDef = computed(() => DS_ICONS[this.icon()]);
  protected faRole = computed(() => (this.label() ? 'img' : 'presentation'));
}
