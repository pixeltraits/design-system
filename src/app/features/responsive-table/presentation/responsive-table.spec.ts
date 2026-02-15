import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';
import { DsResponsiveTable } from './responsive-table';
import { DsResponsiveTableTh } from './responsive-table-th';
import { DsResponsiveTableTd } from './responsive-table-td';
import { DsResponsiveTableActions } from './responsive-table-actions';
import { DsResponsiveTableContainer } from './responsive-table-container';

@Component({
  template: `
    <div dsResponsiveTableContainer [actionMode]="actionMode()">
      <table dsResponsiveTable>
        <thead>
          <tr>
            <th dsResponsiveTableTh>Name</th>
            <th dsResponsiveTableTh>Age</th>
            <th dsResponsiveTableActions [isHeaderActions]="true">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td dsResponsiveTableTd>Alice</td>
            <td dsResponsiveTableTd>30</td>
            <td dsResponsiveTableActions>Edit</td>
          </tr>
          <tr>
            <td dsResponsiveTableTd>Bob</td>
            <td dsResponsiveTableTd>25</td>
            <td dsResponsiveTableActions>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  imports: [
    DsResponsiveTable,
    DsResponsiveTableTh,
    DsResponsiveTableTd,
    DsResponsiveTableActions,
    DsResponsiveTableContainer,
  ],
})
class TestHost {
  actionMode = signal(true);
}

describe('Responsive Table', () => {
  let fixture: ComponentFixture<TestHost>;
  let host: TestHost;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    host = fixture.componentInstance;
    await fixture.whenStable();
  });

  describe('DsResponsiveTable', () => {
    it('should apply ds-responsive-table class', () => {
      const table = fixture.nativeElement.querySelector('table');
      expect(table.classList).toContain('ds-responsive-table');
    });
  });

  describe('DsResponsiveTableTh', () => {
    it('should apply ds-responsive-table-th class', () => {
      const th = fixture.nativeElement.querySelector('th[dsResponsiveTableTh]');
      expect(th.classList).toContain('ds-responsive-table-th');
    });
  });

  describe('DsResponsiveTableTd', () => {
    it('should apply ds-responsive-table-td class', () => {
      const td = fixture.nativeElement.querySelector('td[dsResponsiveTableTd]');
      expect(td.classList).toContain('ds-responsive-table-td');
    });
  });

  describe('DsResponsiveTableActions', () => {
    it('should apply ds-responsive-table-actions class', () => {
      const actions = fixture.nativeElement.querySelector('[dsResponsiveTableActions]');
      expect(actions.classList).toContain('ds-responsive-table-actions');
    });

    it('should apply header modifier class when isHeaderActions is true', () => {
      const headerActions = fixture.nativeElement.querySelector(
        'th[dsResponsiveTableActions]',
      );
      expect(headerActions.classList).toContain('ds-responsive-table-actions--header');
    });

    it('should not apply header modifier class on body actions', () => {
      const bodyActions = fixture.nativeElement.querySelector(
        'td[dsResponsiveTableActions]',
      );
      expect(bodyActions.classList).not.toContain('ds-responsive-table-actions--header');
    });
  });

  describe('DsResponsiveTableContainer', () => {
    it('should apply ds-responsive-table-container class', () => {
      const container = fixture.nativeElement.querySelector(
        '[dsResponsiveTableContainer]',
      );
      expect(container.classList).toContain('ds-responsive-table-container');
    });

    it('should not have panning class initially', () => {
      const container = fixture.nativeElement.querySelector(
        '[dsResponsiveTableContainer]',
      );
      expect(container.classList).not.toContain(
        'ds-responsive-table-container--panning',
      );
    });

    it('should add panning class on mousedown', async () => {
      const container = fixture.nativeElement.querySelector(
        '[dsResponsiveTableContainer]',
      );
      container.dispatchEvent(new MouseEvent('mousedown', { clientX: 100 }));
      await fixture.whenStable();
      expect(container.classList).toContain('ds-responsive-table-container--panning');
    });

    it('should remove panning class on mouseup', async () => {
      const container = fixture.nativeElement.querySelector(
        '[dsResponsiveTableContainer]',
      );
      container.dispatchEvent(new MouseEvent('mousedown', { clientX: 100 }));
      await fixture.whenStable();
      window.dispatchEvent(new MouseEvent('mouseup'));
      await fixture.whenStable();
      expect(container.classList).not.toContain(
        'ds-responsive-table-container--panning',
      );
    });

    it('should not pan when actionMode is false', async () => {
      host.actionMode.set(false);
      await fixture.whenStable();
      const container = fixture.nativeElement.querySelector(
        '[dsResponsiveTableContainer]',
      );
      container.dispatchEvent(new MouseEvent('mousedown', { clientX: 100 }));
      await fixture.whenStable();
      expect(container.classList).not.toContain(
        'ds-responsive-table-container--panning',
      );
    });
  });
});
