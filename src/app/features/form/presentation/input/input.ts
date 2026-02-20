import { Directive } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: 'input[dsInput], textarea[dsInput]',
  hostDirectives: [MatInput],
  host: { class: 'ds-input' },
})
export class DsInput {}
