# Design System

Angular 21 design system built on Angular Material (M3), with Storybook for component documentation.

## Stack

- **Angular 21** — standalone, zoneless, signals-based
- **Angular Material** — M3 theme system
- **Storybook 10** — component documentation and visual testing
- **Vitest** — unit testing
- **ESLint** + **eslint-plugin-boundaries** — hexagonal architecture enforcement
- **Prettier** — code formatting
- **SCSS** — styles

## Getting Started

```bash
npm install
ng serve
```

## Commands

| Command | Description |
|---|---|
| `ng serve` | Start dev server |
| `ng test` | Run unit tests (Vitest) |
| `ng test --watch` | Run tests in watch mode |
| `ng build` | Production build |
| `ng lint` | Run ESLint |
| `npm run storybook` | Start Storybook (port 6006) |
| `npm run build-storybook` | Build static Storybook |

## Architecture

This project follows **hexagonal architecture** (ports & adapters):

```
src/app/
  core/                 # Shared cross-feature code
    domain/             # Models, value objects, interfaces
    application/        # Use cases, ports
    infrastructure/     # Adapters, implementations
  features/             # Feature modules
    <feature>/
      domain/           # Models, ports
      application/      # Use cases
      infrastructure/   # Adapters
      presentation/     # Components + stories
      <feature>.routes.ts
```

### Layer Rules

- **Domain** — pure TypeScript, no Angular/Material/RxJS imports
- **Application** — only `@angular/core` (for DI), no Material/CDK
- **Infrastructure** — implements ports, can use Angular/Material/CDK
- **Presentation** — components consuming use cases, can use Material/CDK

## Selector Prefix

All components use the `ds` prefix: `<ds-button>`, `<ds-card>`, etc.

## Storybook

Every presentation component has a colocated `.stories.ts` file using CSF3 format. Storybook is preconfigured with zoneless change detection and Material animations.
