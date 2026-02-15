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
};

export default meta;

type Story = StoryObj<DialogOpener>;

export const Default: Story = {
  render: () => ({
    props: {
      component: DefaultDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};

export const Danger: Story = {
  render: () => ({
    props: {
      component: DangerDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};

export const Scrollable: Story = {
  render: () => ({
    props: {
      component: ScrollableDialogContent,
    },
    template: `<ds-story-dialog-opener [component]="component" />`,
  }),
};
