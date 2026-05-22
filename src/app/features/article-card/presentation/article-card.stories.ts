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

/**
 * Lecture moyenne (> 10 min) — le badge `readTime` bascule en orange
 * (token `--ds-status-warning-*`) pour signaler une lecture engageante.
 */
export const Medium: Story = {
  render: () => ({
    template: `
      <ds-article-card
        tag="FULLSTACK"
        readTime="25 min"
        title="Déployer une app Angular + NestJS en production"
        excerpt="Front public, API, back-office d'administration et base de données : packager une vraie stack web en stacks Docker Swarm distinctes."
        date="2026-05-17"
        link="#"
      ></ds-article-card>
    `,
  }),
};

/**
 * Lecture longue (> 30 min) — le badge `readTime` bascule en rouge
 * (token `--ds-status-unavailable-*`) pour signaler un guide long.
 */
export const Long: Story = {
  render: () => ({
    template: `
      <ds-article-card
        tag="DEVOPS"
        readTime="50 min"
        title="Mettre en place une infra DevOps : du serveur à la production"
        excerpt="Passer d'un serveur Debian vide à une infra qui déploie en prod à chaque commit : Docker Swarm, Nginx, CI/CD GitHub et sécurité en couches."
        date="2026-05-17"
        link="#"
      ></ds-article-card>
    `,
  }),
};
