import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ds-avatar',
  templateUrl: 'avatar.html',
  styleUrl: 'avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsAvatar {
  src = input<string>();
  alt = input<string>('');
  initials = input<string>();
}
