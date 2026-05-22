import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, signal } from '@angular/core';

@Component({
  selector: 'ds-code-block',
  templateUrl: 'code-block.html',
  styleUrl: 'code-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCodeBlock {
  /** Contenu textuel à afficher et à copier. */
  readonly code = input.required<string>();

  /** Étiquette du bouton copier — utile pour l'i18n. */
  readonly copyLabel = input<string>('Copier');

  /** Étiquette quand la copie vient de réussir — affichée ~2 s. */
  readonly copiedLabel = input<string>('Copié');

  protected readonly copied = signal(false);

  private readonly destroyRef = inject(DestroyRef);
  private resetHandle = 0;

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.resetHandle));
  }

  protected async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
      clearTimeout(this.resetHandle);
      this.resetHandle = setTimeout(() => this.copied.set(false), 2000) as unknown as number;
    } catch {
      // Permission refusée ou API non dispo — silent fail.
    }
  }
}
