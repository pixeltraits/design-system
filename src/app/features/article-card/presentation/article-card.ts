import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'ds-article-card',
  templateUrl: 'article-card.html',
  styleUrl: 'article-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsArticleCard {
  tag = input.required<string>();
  readTime = input.required<string>();
  title = input.required<string>();
  excerpt = input.required<string>();
  date = input.required<string>();
  link = input<string>('#');

  /**
   * Variant visuel du badge de temps de lecture, dérivé automatiquement de
   * `readTime` :
   *
   *   - `> 30 min` → 'long'   (badge rouge)
   *   - `> 10 min` → 'medium' (badge orange)
   *   - sinon      → null     (texte muted simple)
   *
   * Le nombre est extrait depuis la chaîne (« 25 min », « 1 h », « 5min »…).
   */
  readonly readTimeVariant = computed<'medium' | 'long' | null>(() => {
    const match = this.readTime().match(/(\d+)/);
    if (!match) return null;
    const n = parseInt(match[1], 10);
    if (n > 30) return 'long';
    if (n > 10) return 'medium';
    return null;
  });
}
