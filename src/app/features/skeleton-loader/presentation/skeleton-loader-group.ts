import { contentChildren, Directive, effect, input } from '@angular/core';
import { DsSkeletonLoader } from './skeleton-loader';

@Directive({
  selector: '[dsSkeletonLoaderGroup]',
})
export class DsSkeletonLoaderGroup {
  dsSkeletonLoaderGroup = input(false);

  private readonly skeletons = contentChildren(DsSkeletonLoader, { descendants: true });

  constructor() {
    effect(() => {
      const loading = this.dsSkeletonLoaderGroup();
      this.skeletons().forEach((skeleton) => skeleton.loading.set(loading));
    });
  }
}
