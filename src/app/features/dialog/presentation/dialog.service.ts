import { Injectable, inject } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

const DS_DIALOG_DEFAULTS: MatDialogConfig = {
  width: '480px',
  autoFocus: 'first-tabbable',
  restoreFocus: true,
  panelClass: 'ds-dialog-panel',
};

@Injectable({ providedIn: 'root' })
export class DsDialog {
  private matDialog = inject(MatDialog);

  open<T, D = unknown, R = unknown>(
    component: ComponentType<T>,
    config?: MatDialogConfig<D>,
  ): MatDialogRef<T, R> {
    return this.matDialog.open(component, { ...DS_DIALOG_DEFAULTS, ...config });
  }

  closeAll(): void {
    this.matDialog.closeAll();
  }

  get afterAllClosed() {
    return this.matDialog.afterAllClosed;
  }

  get openDialogs() {
    return this.matDialog.openDialogs;
  }

  getDialogById(id: string) {
    return this.matDialog.getDialogById(id);
  }
}
