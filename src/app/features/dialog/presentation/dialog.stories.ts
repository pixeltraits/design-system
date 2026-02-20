import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsDialog } from './dialog.service';
import { DsDialogComponent } from './dialog';
import { DsDialogTitle } from './dialog-title';
import { DsDialogContent } from './dialog-content';
import { DsDialogActions } from './dialog-actions';
import { DsDialogClose } from './dialog-close';
import { DsButton } from '@features/button/presentation/button';

@Component({
  selector: 'ds-story-default-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose, DsButton],
  template: `
    <ds-dialog>
      <h2 dsDialogTitle>Confirm action</h2>
      <div dsDialogContent>
        <p>Are you sure you want to proceed with this action?</p>
      </div>
      <div dsDialogActions>
        <button dsButton="secondary" dsDialogClose>Cancel</button>
        <button dsButton="primary" [dsDialogClose]="true">Confirm</button>
      </div>
    </ds-dialog>
  `,
})
class DefaultDialogContent {}

@Component({
  selector: 'ds-story-danger-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose, DsButton],
  template: `
    <ds-dialog>
      <h2 dsDialogTitle>Delete item</h2>
      <div dsDialogContent>
        <p>This action cannot be undone. Are you sure you want to delete this item permanently?</p>
      </div>
      <div dsDialogActions>
        <button dsButton="secondary" dsDialogClose>Cancel</button>
        <button dsButton="danger" [dsDialogClose]="true">Delete</button>
      </div>
    </ds-dialog>
  `,
})
class DangerDialogContent {}

@Component({
  selector: 'ds-story-scrollable-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose, DsButton],
  template: `
    <ds-dialog>
      <h2 dsDialogTitle>Terms and conditions</h2>
      <div dsDialogContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
      </div>
      <div dsDialogActions>
        <button dsButton="secondary" dsDialogClose>Decline</button>
        <button dsButton="primary" [dsDialogClose]="true">Accept</button>
      </div>
    </ds-dialog>
  `,
})
class ScrollableDialogContent {}

@Component({
  selector: 'ds-story-form-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose, DsButton],
  template: `
    <ds-dialog>
      <h2 dsDialogTitle>Edit profile</h2>
      <div dsDialogContent>
        <label for="name" style="display: block; margin-bottom: 4px; font: var(--mat-sys-label-medium); color: var(--mat-sys-on-surface)">Name</label>
        <input id="name" type="text" value="John Doe" style="width: 100%; padding: 8px 12px; border: 1px solid var(--mat-sys-outline); border-radius: var(--mat-sys-corner-small); font: var(--mat-sys-body-medium); box-sizing: border-box" />
      </div>
      <div dsDialogActions>
        <button dsButton="secondary" dsDialogClose>Cancel</button>
        <button dsButton="primary" [dsDialogClose]="'saved'">Save</button>
      </div>
    </ds-dialog>
  `,
})
class FormDialogContent {}

@Component({
  selector: 'ds-story-dialog-opener',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton],
  template: `<button dsButton="primary" (click)="open()">Open dialog</button>`,
})
class DialogOpener {
  private dialog = inject(DsDialog);
  component = input.required<ComponentType<unknown>>();

  open() {
    this.dialog.open(this.component());
  }
}

const meta: Meta<DialogOpener> = {
  title: 'Components/Dialog',
  component: DialogOpener,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DialogOpener, DsButton],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A dialog (modal) displays focused content that requires user attention or interaction.

## Architecture

The dialog system is composed of two parts:

1. **A dialog content component** — a standalone Angular component that defines the template of the modal (title, body, actions).
2. **The \`DsDialog\` service** — used to open the dialog programmatically from TypeScript.

## Dialog content component (template)

Create a standalone component that uses the dialog directives to structure your content:

\`\`\`ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsDialogComponent } from '@features/dialog/presentation/dialog';
import { DsDialogTitle } from '@features/dialog/presentation/dialog-title';
import { DsDialogContent } from '@features/dialog/presentation/dialog-content';
import { DsDialogActions } from '@features/dialog/presentation/dialog-actions';
import { DsDialogClose } from '@features/dialog/presentation/dialog-close';
import { DsButton } from '@features/button/presentation/button';

@Component({
  selector: 'ds-confirm-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DsDialogComponent,
    DsDialogTitle,
    DsDialogContent,
    DsDialogActions,
    DsDialogClose,
    DsButton,
  ],
  template: \\\`
    <ds-dialog>
      <h2 dsDialogTitle>Confirm action</h2>
      <div dsDialogContent>
        <p>Are you sure you want to proceed?</p>
      </div>
      <div dsDialogActions>
        <button dsButton="secondary" dsDialogClose>Cancel</button>
        <button dsButton="primary" [dsDialogClose]="true">Confirm</button>
      </div>
    </ds-dialog>
  \\\`,
})
export class ConfirmDialogComponent {}
\`\`\`

### Template structure

| Directive | Role | Element |
|---|---|---|
| \`<ds-dialog>\` | Root wrapper component | Required container |
| \`dsDialogTitle\` | Dialog heading | Apply on \`<h2>\` |
| \`dsDialogContent\` | Scrollable body area | Apply on \`<div>\` |
| \`dsDialogActions\` | Footer with action buttons | Apply on \`<div>\` |
| \`dsDialogClose\` | Closes the dialog on click | Apply on \`<button>\` |

### Returning a result

Use \`[dsDialogClose]\` with a value to return a result when the dialog closes:

- \`dsDialogClose\` (no value) — closes with \`undefined\`
- \`[dsDialogClose]="true"\` — closes with \`true\`
- \`[dsDialogClose]="'saved'"\` — closes with the string \`'saved'\`

## Opening a dialog from TypeScript

Inject the \`DsDialog\` service and call \`open()\` with your dialog content component:

\`\`\`ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DsDialog } from '@features/dialog/presentation/dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog';

@Component({
  selector: 'ds-my-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \\\`
    <button (click)="openConfirmDialog()">Delete item</button>
  \\\`,
})
export class MyPageComponent {
  private dialog = inject(DsDialog);

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // User confirmed — proceed with the action
      }
    });
  }
}
\`\`\`

### Configuration options

You can pass a config object as a second argument to customize the dialog:

\`\`\`ts
this.dialog.open(ConfirmDialogComponent, {
  width: '600px',           // Override default width (480px)
  data: { itemId: 42 },     // Pass data to the dialog component
  disableClose: true,       // Prevent closing on backdrop click or Escape
});
\`\`\`

### Passing data to a dialog

Inject \`MAT_DIALOG_DATA\` in the dialog content component to receive data:

\`\`\`ts
import { inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Inside your dialog content component:
private data = inject<{ itemId: number }>(MAT_DIALOG_DATA);
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<DialogOpener>;

export const Default: Story = {
  name: 'Confirmation',
  parameters: {
    docs: {
      description: {
        story: `A standard confirmation dialog with a title, a message, and two action buttons (Cancel / Confirm).

**Dialog template:**

\`\`\`html
<ds-dialog>
  <h2 dsDialogTitle>Confirm action</h2>
  <div dsDialogContent>
    <p>Are you sure you want to proceed with this action?</p>
  </div>
  <div dsDialogActions>
    <button dsButton="secondary" dsDialogClose>Cancel</button>
    <button dsButton="primary" [dsDialogClose]="true">Confirm</button>
  </div>
</ds-dialog>
\`\`\`

**Opening from TypeScript:**

\`\`\`ts
private dialog = inject(DsDialog);

confirm() {
  const ref = this.dialog.open(ConfirmDialogComponent);
  ref.afterClosed().subscribe(result => {
    if (result === true) {
      // User confirmed
    }
  });
}
\`\`\``,
      },
    },
  },
  render: () => ({
    props: {
      component: DefaultDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};

export const Danger: Story = {
  name: 'Destructive action',
  parameters: {
    docs: {
      description: {
        story: `A destructive action dialog uses the \`danger\` button variant to emphasize the irreversible nature of the action.

**Dialog template:**

\`\`\`html
<ds-dialog>
  <h2 dsDialogTitle>Delete item</h2>
  <div dsDialogContent>
    <p>This action cannot be undone. Are you sure you want to delete this item permanently?</p>
  </div>
  <div dsDialogActions>
    <button dsButton="secondary" dsDialogClose>Cancel</button>
    <button dsButton="danger" [dsDialogClose]="true">Delete</button>
  </div>
</ds-dialog>
\`\`\`

**Opening from TypeScript:**

\`\`\`ts
private dialog = inject(DsDialog);

deleteItem(itemId: number) {
  const ref = this.dialog.open(DeleteDialogComponent);
  ref.afterClosed().subscribe(confirmed => {
    if (confirmed) {
      this.itemService.delete(itemId);
    }
  });
}
\`\`\``,
      },
    },
  },
  render: () => ({
    props: {
      component: DangerDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};

export const Scrollable: Story = {
  name: 'Scrollable content',
  parameters: {
    docs: {
      description: {
        story: `When the dialog content exceeds the viewport height, the \`dsDialogContent\` area becomes scrollable while the title and actions remain fixed.

**Dialog template:**

\`\`\`html
<ds-dialog>
  <h2 dsDialogTitle>Terms and conditions</h2>
  <div dsDialogContent>
    <!-- Long content here — this area scrolls automatically -->
    <p>...</p>
  </div>
  <div dsDialogActions>
    <button dsButton="secondary" dsDialogClose>Decline</button>
    <button dsButton="primary" [dsDialogClose]="true">Accept</button>
  </div>
</ds-dialog>
\`\`\``,
      },
    },
  },
  render: () => ({
    props: {
      component: ScrollableDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};

export const WithForm: Story = {
  name: 'With form',
  parameters: {
    docs: {
      description: {
        story: `A dialog can contain form fields. Use \`[dsDialogClose]\` with a value to return the result to the caller.

**Dialog template:**

\`\`\`html
<ds-dialog>
  <h2 dsDialogTitle>Edit profile</h2>
  <div dsDialogContent>
    <label for="name">Name</label>
    <input id="name" type="text" />
  </div>
  <div dsDialogActions>
    <button dsButton="secondary" dsDialogClose>Cancel</button>
    <button dsButton="primary" [dsDialogClose]="'saved'">Save</button>
  </div>
</ds-dialog>
\`\`\`

**Opening and handling the result:**

\`\`\`ts
private dialog = inject(DsDialog);

editProfile() {
  const ref = this.dialog.open(EditProfileDialogComponent, {
    data: { name: 'John Doe' },
  });

  ref.afterClosed().subscribe(result => {
    if (result === 'saved') {
      // Persist changes
    }
  });
}
\`\`\``,
      },
    },
  },
  render: () => ({
    props: {
      component: FormDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};
