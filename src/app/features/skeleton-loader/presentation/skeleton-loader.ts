import { Directive, input, model } from '@angular/core';

export type DsSkeletonVariant = 'wave' | 'pulse' | 'static';

@Directive({
  selector: '[dsSkeletonLoader]',
  host: {
    '[class.ds-skeleton]': 'loading()',
    '[class.ds-skeleton--wave]': 'loading() && variant() === "wave"',
    '[class.ds-skeleton--pulse]': 'loading() && variant() === "pulse"',
    '[class.ds-skeleton--static]': 'loading() && variant() === "static"',
    '[attr.aria-busy]': 'loading()',
  },
})
export class DsSkeletonLoader {
  variant = input<DsSkeletonVariant>('wave');
  loading = model(false);
}
