import { Directive } from '@angular/core';

@Directive({
  selector: '[dsSidenavBody]',
  host: {
    class: 'ds-sidenav-body',
  },
})
export class DsSidenavBody {}
