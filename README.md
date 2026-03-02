# @pixeltraits/design-system

Angular 21 design system built on Angular Material (M3). Standalone, zoneless, signals-based.

## Installation

```bash
npm install @pixeltraits/design-system
```

### Peer dependencies

```bash
npm install @angular/animations @angular/cdk @angular/common @angular/core \
  @angular/forms @angular/material @angular/platform-browser @angular/router \
  @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core \
  @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons \
  @fortawesome/free-solid-svg-icons rxjs
```

## Setup

### 1. Apply the theme in your global `styles.scss`

```scss
@use '@pixeltraits/design-system/styles' as ds;

html {
  @include ds.theme();
}

// Optionally include all component styles
@include ds.components();
```

### 2. Configure your app (zoneless + animations)

```typescript
// app.config.ts
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),
  ],
};
```

## Components

All components use the `ds` selector prefix and are tree-shakeable standalone components.

| Component | Selector / Token | Description |
|---|---|---|
| `DsButton` | `button[dsButton]`, `a[dsButton]` | Button directive with variants: `primary`, `secondary`, `danger` |
| `DsIcon` | `ds-icon` | Icon component using FontAwesome |
| `DsFormField` | `ds-form-field` | Form field wrapper |
| `DsInput` | `dsInput` | Input directive |
| `DsSelect` | `ds-select` | Select component |
| `DsDialog` | service | Dialog service (wraps MatDialog) |
| `DsDialogComponent` | `ds-dialog` | Dialog container |
| `DsResponsiveTable` | `ds-responsive-table` | Responsive table |
| `DsSidenavHeader` | `ds-sidenav-header` | Sidenav header |
| `DsSidenavBody` | `ds-sidenav-body` | Sidenav body |
| `DsSkeletonLoader` | `ds-skeleton-loader` | Skeleton loader |
| `DsSkeletonLoaderGroup` | `ds-skeleton-loader-group` | Skeleton loader group |

## Usage examples

### Button

```typescript
import { DsButton } from '@pixeltraits/design-system';

@Component({
  imports: [DsButton],
  template: `
    <button dsButton="primary">Save</button>
    <button dsButton="secondary">Cancel</button>
    <button dsButton="danger">Delete</button>
  `,
})
export class MyComponent {}
```

### Icon

```typescript
import { DsIcon } from '@pixeltraits/design-system';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [DsIcon],
  template: `<ds-icon [icon]="faUser" />`,
})
export class MyComponent {
  faUser = faUser;
}
```

### Dialog

```typescript
import { DsDialog, DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose } from '@pixeltraits/design-system';

// In your dialog content component:
@Component({
  imports: [DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose],
  template: `
    <ds-dialog>
      <h2 dsDialogTitle>Confirm</h2>
      <div dsDialogContent>Are you sure?</div>
      <div dsDialogActions>
        <button dsButton="secondary" [dsDialogClose]="false">Cancel</button>
        <button dsButton="danger" [dsDialogClose]="true">Delete</button>
      </div>
    </ds-dialog>
  `,
})
export class ConfirmDialogComponent {}

// Open the dialog:
@Component({ ... })
export class MyComponent {
  private dialog = inject(DsDialog);

  openConfirm() {
    this.dialog.open(ConfirmDialogComponent);
  }
}
```

---

## Development

### Stack

- **Angular 21** — standalone, zoneless, signals-based
- **Angular Material** — M3 theme system
- **Storybook 10** — component documentation and visual testing
- **Vitest** — unit testing
- **ESLint** + `eslint-plugin-boundaries` — hexagonal architecture enforcement
- **Prettier** — code formatting

### Getting started

```bash
npm install
ng serve
```

### Commands

| Command | Description |
|---|---|
| `ng serve` | Start dev server |
| `ng test` | Run unit tests (Vitest) |
| `ng test --watch` | Run tests in watch mode |
| `ng build` | Production build |
| `ng lint` | Run ESLint |
| `npm run storybook` | Start Storybook (port 6006) |
| `npm run build-storybook` | Build static Storybook |
| `npm run build:lib` | Build the npm library |
| `npm run publish:lib` | Build and publish to npm |

### Architecture

Hexagonal architecture (ports & adapters) enforced by ESLint:

```
src/app/
  core/          # Shared cross-feature code
  features/
    <feature>/
      domain/          # Models, ports (no framework deps)
      application/     # Use cases
      infrastructure/  # Adapters
      presentation/    # Components + stories
```

### Adding a component

Every presentation component must have a colocated `.stories.ts` file in CSF3 format and be exported from `src/public-api.ts`.
