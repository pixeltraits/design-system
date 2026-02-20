import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DsFormField } from '../form-field/form-field';
import { DsInput } from './input';

@Component({
  selector: 'ds-story-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, DsFormField, DsInput],
  template: `
    <mat-form-field dsFormField>
      <mat-label>Email</mat-label>
      <input dsInput type="email" [formControl]="control" />
    </mat-form-field>
  `,
})
class StoryTextInput {
  control = new FormControl('');
}

@Component({
  selector: 'ds-story-input-hint-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, DsFormField, DsInput],
  template: `
    <mat-form-field dsFormField>
      <mat-label>Email</mat-label>
      <input dsInput type="email" [formControl]="control" />
      <mat-hint>Enter your professional email</mat-hint>
      @if (control.hasError('required')) {
        <mat-error>Email is required</mat-error>
      } @else if (control.hasError('email')) {
        <mat-error>Invalid email format</mat-error>
      }
    </mat-form-field>
  `,
})
class StoryInputHintError {
  control = new FormControl('', [Validators.required, Validators.email]);
}

@Component({
  selector: 'ds-story-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, DsFormField, DsInput],
  template: `
    <mat-form-field dsFormField>
      <mat-label>Description</mat-label>
      <textarea dsInput [formControl]="control" rows="4"></textarea>
      <mat-hint>Max 500 characters</mat-hint>
    </mat-form-field>
  `,
})
class StoryTextarea {
  control = new FormControl('');
}

@Component({
  selector: 'ds-story-disabled-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, DsFormField, DsInput],
  template: `
    <mat-form-field dsFormField>
      <mat-label>Disabled input</mat-label>
      <input dsInput [formControl]="control" />
    </mat-form-field>
  `,
})
class StoryDisabledInput {
  control = new FormControl({ value: 'Disabled value', disabled: true });
}

const meta: Meta = {
  title: 'Components/Form Field/Input',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [StoryTextInput, StoryInputHintError, StoryTextarea, StoryDisabledInput],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The \`dsInput\` directive wraps Angular Material's \`MatInput\` for text inputs and textareas.

## Usage

\`\`\`html
<mat-form-field dsFormField>
  <mat-label>Email</mat-label>
  <input dsInput type="email" formControlName="email" />
  <mat-hint>Your professional email</mat-hint>
  <mat-error>Invalid email</mat-error>
</mat-form-field>
\`\`\`

### Import

\`\`\`ts
import { DsFormField } from '@features/form/presentation/form-field/form-field';
import { DsInput } from '@features/form/presentation/input/input';
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const TextInput: Story = {
  name: 'Text Input',
  render: () => ({
    template: `<ds-story-text-input />`,
  }),
};

export const InputWithHintAndError: Story = {
  name: 'Input with Hint and Error',
  parameters: {
    docs: {
      description: {
        story: 'An input with hint text and validation errors. Clear the field and click outside to see the error state.',
      },
    },
  },
  render: () => ({
    template: `<ds-story-input-hint-error />`,
  }),
};

export const Textarea: Story = {
  name: 'Textarea',
  render: () => ({
    template: `<ds-story-textarea />`,
  }),
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'An input in its disabled state.',
      },
    },
  },
  render: () => ({
    template: `<ds-story-disabled-input />`,
  }),
};
