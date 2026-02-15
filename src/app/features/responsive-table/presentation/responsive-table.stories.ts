import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsResponsiveTable } from './responsive-table';
import { DsResponsiveTableTh } from './responsive-table-th';
import { DsResponsiveTableTd } from './responsive-table-td';
import { DsResponsiveTableActions } from './responsive-table-actions';
import { DsResponsiveTableContainer } from './responsive-table-container';
import { DsButton } from '@features/button/presentation/button';
import { DsIcon } from '@features/icon/presentation/icon';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Responsive Table',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        DsResponsiveTable,
        DsResponsiveTableTh,
        DsResponsiveTableTd,
        DsResponsiveTableActions,
        DsResponsiveTableContainer,
        DsButton,
        DsIcon,
      ],
    }),
  ],
};

export default meta;

export const Classic: Story = {
  render: () => ({
    template: `
      <div dsResponsiveTableContainer style="max-height: 300px;" [actionMode]="false">
        <table dsResponsiveTable>
          <thead>
            <tr>
              <th dsResponsiveTableTh>Name</th>
              <th dsResponsiveTableTh>Email</th>
              <th dsResponsiveTableTh>Role</th>
              <th dsResponsiveTableTh>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td dsResponsiveTableTd>Alice Martin</td>
              <td dsResponsiveTableTd>alice&#64;example.com</td>
              <td dsResponsiveTableTd>Admin</td>
              <td dsResponsiveTableTd>Active</td>
            </tr>
            <tr>
              <td dsResponsiveTableTd>Bob Dupont</td>
              <td dsResponsiveTableTd>bob&#64;example.com</td>
              <td dsResponsiveTableTd>User</td>
              <td dsResponsiveTableTd>Active</td>
            </tr>
            <tr>
              <td dsResponsiveTableTd>Claire Durand</td>
              <td dsResponsiveTableTd>claire&#64;example.com</td>
              <td dsResponsiveTableTd>User</td>
              <td dsResponsiveTableTd>Inactive</td>
            </tr>
            <tr>
              <td dsResponsiveTableTd>David Leroy</td>
              <td dsResponsiveTableTd>david&#64;example.com</td>
              <td dsResponsiveTableTd>User</td>
              <td dsResponsiveTableTd>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};

export const WithActions: Story = {
  render: () => ({
    template: `
      <div dsResponsiveTableContainer style="max-height: 300px; max-width: 600px;">
        <table dsResponsiveTable>
          <thead>
            <tr>
              <th dsResponsiveTableTh>Name</th>
              <th dsResponsiveTableTh>Email</th>
              <th dsResponsiveTableTh>Department</th>
              <th dsResponsiveTableTh>Location</th>
              <th dsResponsiveTableTh>Phone</th>
              <th dsResponsiveTableTh>Role</th>
              <th dsResponsiveTableTh>Status</th>
              <th dsResponsiveTableActions [isHeaderActions]="true">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td dsResponsiveTableTd style="white-space: nowrap;">Alice Martin</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">alice.martin&#64;company.com</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Engineering</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Paris, France</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">+33 1 23 45 67 89</td>
              <td dsResponsiveTableTd>Admin</td>
              <td dsResponsiveTableTd>Active</td>
              <td dsResponsiveTableActions>
                <div style="display: flex; gap: 8px;">
                  <button dsButton="secondary" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="pen" size="sm" />
                  </button>
                  <button dsButton="danger" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="trash" size="sm" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td dsResponsiveTableTd style="white-space: nowrap;">Bob Dupont</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">bob.dupont&#64;company.com</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Marketing</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Lyon, France</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">+33 4 56 78 90 12</td>
              <td dsResponsiveTableTd>User</td>
              <td dsResponsiveTableTd>Active</td>
              <td dsResponsiveTableActions>
                <div style="display: flex; gap: 8px;">
                  <button dsButton="secondary" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="pen" size="sm" />
                  </button>
                  <button dsButton="danger" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="trash" size="sm" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td dsResponsiveTableTd style="white-space: nowrap;">Claire Durand</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">claire.durand&#64;company.com</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Sales</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Marseille, France</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">+33 6 12 34 56 78</td>
              <td dsResponsiveTableTd>User</td>
              <td dsResponsiveTableTd>Inactive</td>
              <td dsResponsiveTableActions>
                <div style="display: flex; gap: 8px;">
                  <button dsButton="secondary" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="pen" size="sm" />
                  </button>
                  <button dsButton="danger" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="trash" size="sm" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td dsResponsiveTableTd style="white-space: nowrap;">David Leroy</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">david.leroy&#64;company.com</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Engineering</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">Toulouse, France</td>
              <td dsResponsiveTableTd style="white-space: nowrap;">+33 5 67 89 01 23</td>
              <td dsResponsiveTableTd>User</td>
              <td dsResponsiveTableTd>Active</td>
              <td dsResponsiveTableActions>
                <div style="display: flex; gap: 8px;">
                  <button dsButton="secondary" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="pen" size="sm" />
                  </button>
                  <button dsButton="danger" style="min-width: auto; height: 32px; padding: 0 12px;">
                    <ds-icon icon="trash" size="sm" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font: var(--mat-sys-body-small); color: var(--mat-sys-on-surface-variant); margin-top: 8px;">
        Drag horizontally to pan. The Actions column stays sticky on the right.
      </p>
    `,
  }),
};
