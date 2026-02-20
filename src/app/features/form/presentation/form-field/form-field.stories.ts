import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DsFormField } from './form-field';
import { DsInput } from '../input/input';
import { DsSelect } from '../select/select';

@Component({
  selector: 'ds-story-all-form-fields',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    DsFormField,
    DsInput,
    DsSelect,
  ],
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
    }
  `,
  template: `
    <mat-form-field dsFormField>
      <mat-label>Text input</mat-label>
      <input dsInput [formControl]="textControl" />
    </mat-form-field>

    <mat-form-field dsFormField>
      <mat-label>Email with validation</mat-label>
      <input dsInput type="email" [formControl]="emailControl" />
      <mat-hint>Enter a valid email</mat-hint>
      @if (emailControl.hasError('email')) {
        <mat-error>Invalid email format</mat-error>
      }
    </mat-form-field>

    <mat-form-field dsFormField>
      <mat-label>Description</mat-label>
      <textarea dsInput [formControl]="textareaControl" rows="3"></textarea>
    </mat-form-field>

    <mat-form-field dsFormField>
      <mat-label>Country</mat-label>
      <mat-select dsSelect [formControl]="selectControl">
        <mat-option value="fr">France</mat-option>
        <mat-option value="us">United States</mat-option>
        <mat-option value="de">Germany</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field dsFormField>
      <mat-label>Disabled input</mat-label>
      <input dsInput [formControl]="disabledControl" />
    </mat-form-field>
  `,
})
class StoryAllFormFields {
  textControl = new FormControl('');
  emailControl = new FormControl('', Validators.email);
  textareaControl = new FormControl('');
  selectControl = new FormControl('');
  disabledControl = new FormControl({ value: 'Read only', disabled: true });
}

const meta: Meta = {
  title: 'Components/Form Field',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [StoryAllFormFields],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Form field wraps Angular Material's \`mat-form-field\` with design system styling.

## Usage

Use the \`dsFormField\` directive on \`<mat-form-field>\`, \`dsInput\` on \`<input>\`/\`<textarea>\`, and \`dsSelect\` on \`<mat-select>\`.

### Text input

\`\`\`html
<mat-form-field dsFormField>
  <mat-label>Email</mat-label>
  <input dsInput type="email" formControlName="email" />
  <mat-hint>Your professional email</mat-hint>
  <mat-error>Invalid email</mat-error>
</mat-form-field>
\`\`\`

### Select

\`\`\`html
<mat-form-field dsFormField>
  <mat-label>Country</mat-label>
  <mat-select dsSelect formControlName="country">
    <mat-option value="fr">France</mat-option>
    <mat-option value="us">United States</mat-option>
  </mat-select>
</mat-form-field>
\`\`\`

### Imports

\`\`\`ts
import { DsFormField } from '@features/form/presentation/form-field/form-field';
import { DsInput } from '@features/form/presentation/input/input';
import { DsSelect } from '@features/form/presentation/select/select';
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story: 'Overview of all form field variants: text input, email with validation, textarea, select, and disabled.',
      },
    },
  },
  render: () => ({
    template: `<ds-story-all-form-fields />`,
  }),
};
