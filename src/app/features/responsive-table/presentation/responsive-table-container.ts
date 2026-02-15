import { Directive, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[dsResponsiveTableContainer]',
  host: {
    'class': 'ds-responsive-table-container',
    '[class.ds-responsive-table-container--panning]': 'isPanning()',
    '(mousedown)': 'onMouseDown($event)',
    '(window:mouseup)': 'onMouseUp()',
    '(window:mousemove)': 'onMouseMove($event)',
  },
})
export class DsResponsiveTableContainer {
  actionMode = input(true);
  isPanning = signal(false);

  private readonly el = inject(ElementRef<HTMLElement>);
  private mousePanOffsetStart = 0;
  private scrollLeftStart = 0;

  onMouseDown(event: MouseEvent): void {
    if (!this.actionMode()) return;
    this.isPanning.set(true);
    this.mousePanOffsetStart = event.pageX;
    this.scrollLeftStart = this.el.nativeElement.scrollLeft;
  }

  onMouseUp(): void {
    if (!this.actionMode()) return;
    this.isPanning.set(false);
    this.mousePanOffsetStart = this.el.nativeElement.offsetLeft;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.actionMode() || !this.isPanning()) return;
    event.preventDefault();
    this.el.nativeElement.scrollLeft =
      this.scrollLeftStart - (event.pageX - this.mousePanOffsetStart);
  }
}
