import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DsFormField } from '../form-field/form-field';
import { DsSelect } from './select';

@Component({
  selector: 'ds-story-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, ReactiveFormsModule, DsFormField, DsSelect],
  template: `
    <mat-form-field dsFormField>
      <mat-label>Country</mat-label>
      <mat-select dsSelect [formControl]="control">
        <mat-option value="fr">France</mat-option>
        <mat-option value="us">United States</mat-option>
        <mat-option value="de">Germany</mat-option>
        <mat-option value="es">Spain</mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
class StorySelect {
  control = new FormControl('');
}

@Component({
  selector: 'ds-story-disabled-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, ReactiveFormsModule, DsFormField, DsSelect],
  template: `
    <mat-form-field dsFormField>
      <mat-label>Disabled select</mat-label>
      <mat-select dsSelect [formControl]="control">
        <mat-option value="fr">France</mat-option>
        <mat-option value="us">United States</mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
class StoryDisabledSelect {
  control = new FormControl({ value: 'fr', disabled: true });
}

const meta: Meta = {
  title: 'Components/Form Field/Select',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [StorySelect, StoryDisabledSelect],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The \`dsSelect\` directive wraps Angular Material's \`mat-select\` with design system panel styling.

## Usage

\`\`\`html
<mat-form-field dsFormField>
  <mat-label>Country</mat-label>
  <mat-select dsSelect formControlName="country">
    <mat-option value="fr">France</mat-option>
    <mat-option value="us">United States</mat-option>
  </mat-select>
</mat-form-field>
\`\`\`

### Import

\`\`\`ts
import { DsFormField } from '@features/form/presentation/form-field/form-field';
import { DsSelect } from '@features/form/presentation/select/select';
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Select: Story = {
  name: 'Select',
  render: () => ({
    template: `<ds-story-select />`,
  }),
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'A select in its disabled state.',
      },
    },
  },
  render: () => ({
    template: `<ds-story-disabled-select />`,
  }),
};
