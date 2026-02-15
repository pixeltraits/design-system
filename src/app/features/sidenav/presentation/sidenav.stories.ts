import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DsSidenavHeader } from './sidenav-header';
import { DsSidenavBody } from './sidenav-body';

@Component({
  selector: 'ds-story-sidenav-default',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, DsSidenavHeader, DsSidenavBody],
  template: `
    <mat-sidenav-container style="height: 400px;">
      <mat-sidenav #sidenav mode="side" opened>
        <ds-sidenav-header (closed)="sidenav.close()">
          Navigation
        </ds-sidenav-header>
        <nav dsSidenavBody>
          <a href="#">Home</a><br />
          <a href="#">Settings</a><br />
          <a href="#">Profile</a>
        </nav>
      </mat-sidenav>
      <mat-sidenav-content style="padding: 16px;">
        <button (click)="sidenav.toggle()">Toggle sidenav</button>
        <p>Main content area</p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
class DefaultSidenavStory {}

@Component({
  selector: 'ds-story-sidenav-long-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, DsSidenavHeader, DsSidenavBody],
  template: `
    <mat-sidenav-container style="height: 400px;">
      <mat-sidenav #sidenav mode="side" opened>
        <ds-sidenav-header (closed)="sidenav.close()">
          Navigation
        </ds-sidenav-header>
        <nav dsSidenavBody style="max-height: 300px;">
          @for (item of items; track item) {
            <a href="#">{{ item }}</a><br />
          }
        </nav>
      </mat-sidenav>
      <mat-sidenav-content style="padding: 16px;">
        <button (click)="sidenav.toggle()">Toggle sidenav</button>
        <p>Main content area</p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
class LongContentSidenavStory {
  items = Array.from({ length: 30 }, (_, i) => `Menu item ${i + 1}`);
}

const meta: Meta = {
  title: 'Components/Sidenav',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DefaultSidenavStory, LongContentSidenavStory],
    }),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `<ds-story-sidenav-default />`,
  }),
};

export const LongContent: Story = {
  render: () => ({
    template: `<ds-story-sidenav-long-content />`,
  }),
};
