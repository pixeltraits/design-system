import { ChangeDetectionStrategy, Component, input } from '@angular/core';

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
}
