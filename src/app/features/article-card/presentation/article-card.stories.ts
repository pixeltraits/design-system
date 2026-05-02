import type { Meta, StoryObj } from '@storybook/angular';
import { DsArticleCard } from './article-card';

const meta: Meta<DsArticleCard> = {
  title: 'Components/ArticleCard',
  component: DsArticleCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsArticleCard>;

export const Default: Story = {
  render: () => ({
    template: `
      <ds-article-card
        tag="ANGULAR"
        readTime="5 min"
        title="Zoneless Angular : pourquoi et comment migrer"
        excerpt="La détection de changements par signaux remplace zone.js pour des performances bien meilleures et un modèle mental plus simple."
        date="2025-04-12"
        link="#"
      ></ds-article-card>
    `,
  }),
};
