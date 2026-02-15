import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, inject, provideZonelessChangeDetection } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { DsDialog } from './dialog.service';
import { DsDialogComponent } from './dialog';
import { DsDialogTitle } from './dialog-title';
import { DsDialogContent } from './dialog-content';
import { DsDialogActions } from './dialog-actions';
import { DsDialogClose } from './dialog-close';

@Component({
  template: `
    <ds-dialog>
      <h2 dsDialogTitle>Test Title</h2>
      <div dsDialogContent>Test Content</div>
      <div dsDialogActions>
        <button class="cancel-btn" dsDialogClose>Cancel</button>
        <button class="confirm-btn" [dsDialogClose]="'confirmed'">Confirm</button>
      </div>
    </ds-dialog>
  `,
  imports: [DsDialogComponent, DsDialogTitle, DsDialogContent, DsDialogActions, DsDialogClose],
})
class TestDialogContent {}

@Component({
  template: `<button (click)="open()">Open</button>`,
})
class DialogTestHost {
  private dialog = inject(DsDialog);
  ref: MatDialogRef<TestDialogContent> | null = null;

  open() {
    this.ref = this.dialog.open(TestDialogContent);
  }
}

describe('DsDialog', () => {
  let fixture: ComponentFixture<DialogTestHost>;
  let host: DialogTestHost;
  let dialog: DsDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTestHost, TestDialogContent],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    dialog = TestBed.inject(DsDialog);
    fixture = TestBed.createComponent(DialogTestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    dialog.closeAll();
  });

  it('should open a dialog', async () => {
    host.open();
    await fixture.whenStable();
    const dialogContainer = document.querySelector('.ds-dialog-panel');
    expect(dialogContainer).toBeTruthy();
  });

  it('should render the title', async () => {
    host.open();
    await fixture.whenStable();
    const title = document.querySelector('.ds-dialog-title');
    expect(title).toBeTruthy();
    expect(title!.textContent).toContain('Test Title');
  });

  it('should render the content', async () => {
    host.open();
    await fixture.whenStable();
    const content = document.querySelector('.ds-dialog-content');
    expect(content).toBeTruthy();
    expect(content!.textContent).toContain('Test Content');
  });

  it('should render the actions', async () => {
    host.open();
    await fixture.whenStable();
    const actions = document.querySelector('.ds-dialog-actions');
    expect(actions).toBeTruthy();
  });

  it('should close the dialog via dsDialogClose', async () => {
    host.open();
    await fixture.whenStable();

    const cancelBtn = document.querySelector<HTMLButtonElement>('.cancel-btn');
    cancelBtn?.click();
    await fixture.whenStable();

    expect(dialog.openDialogs.length).toBe(0);
  });

  it('should return result when closing with a value', async () => {
    host.open();
    await fixture.whenStable();

    let result: unknown;
    host.ref!.afterClosed().subscribe((r) => (result = r));

    const confirmBtn = document.querySelector<HTMLButtonElement>('.confirm-btn');
    confirmBtn?.click();
    await fixture.whenStable();

    expect(result).toBe('confirmed');
  });

  it('should apply ds-dialog-panel class', async () => {
    host.open();
    await fixture.whenStable();
    const panel = document.querySelector('.ds-dialog-panel');
    expect(panel).toBeTruthy();
  });

  it('should apply default width', async () => {
    host.open();
    await fixture.whenStable();
    const panel = document.querySelector<HTMLElement>('.ds-dialog-panel');
    expect(panel?.style.width).toBe('480px');
  });

  it('should expose closeAll()', async () => {
    host.open();
    await fixture.whenStable();
    expect(dialog.openDialogs.length).toBe(1);

    dialog.closeAll();
    await fixture.whenStable();
    expect(dialog.openDialogs.length).toBe(0);
  });
});
