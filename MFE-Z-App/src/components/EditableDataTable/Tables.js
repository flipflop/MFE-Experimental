import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import PageTitle from '../../components/PageTitle';
import Widget from '../../components/Widget';
import Table from '../dashboard/components/Table/Table';
import mock from '../dashboard/mock'; 
import EditableTable from './EditableDataTable.js';

const datatableData = [
 ["Joe James", "Example Inc.", "Yonkers", "NY"],
 ["John Walsh", "Example Inc.", "Hartford", "CT"],
 ["Bob Herm", "Example Inc.", "Tampa", "FL"],
 ["James Houston", "Example Inc.", "Dallas", "TX"],
 ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
 ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
 ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
 ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
 ["Meral Elias", "Example Inc.", "Hartford", "CT"],
 ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
 ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
 ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
 ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
 ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
 ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
 ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
 ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

const Tables = props => (
  <React.Fragment>

    <PageTitle title="Data Tables" />
    <Grid item xs={12}>
      <Widget title="Fixed Header" upperTitle disableWidgetMenu>
        <Typography component="p">
          Good data tables allow users to scan, analyze, compare, filter, sort, and manipulate information to derive insights and commit actions.
        </Typography>
        <section>
          <br />
          <img src="img/data-table-fixed-header.gif" alt="Fixed header" />
          <br />
          <Typography component="i">
            Preserving the row header as a user scrolls provides continuous context to the user.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Horizontal Scroll" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-horizontal-scroll.gif" alt="Horizontal scroll" />
          <br />
          <Typography component="i">
              Horizontal scrolling is inevitable when presenting large datasets. It is good practice to place identifier data in the first column. As an advanced feature, enable individual locking of columns so users can compare data with multiple anchoring identifiers.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Resizable columns" upperTitle disableWidgetMenu>
        <section>
         <br />
        <img src="img/data-table-resizable-columns.gif" alt="Resizable columns" />
        <br />
        <Typography component="i">
            Resizing columns allows users to see abbreviated data in full.
        </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Row Style" upperTitle disableWidgetMenu>
        <section>
            <Typography component="i">
                Zebra Stripes, Line Divisions, Free Form.
            </Typography>
            <br />
            <img src="img/data-table-row-style.gif" alt="Row style" />
            <br />
            <Typography component="i">
                The row style helps users scan data. Reducing visual noise by removing row lines or zebra stripes works well for small datasets. Users may lose their place when parsing larger datasets. Line divisions help users keep their place. Alternating rows (aka zebra stripes) help users keep their place when scanning long horizontal datasets. Although they cause usability problems when there is a small number of rows because users may ascribe meaning to the highlighted rows.
            </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Display Density" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-display-density.gif" alt="Display density" />
          <br />
          <Typography component="i">
              Smaller row height enables the user to view more data without the need for scrolling. However, it effects scannability leading to parsing errors. That is why many successful data table designs incorporate the ability to control display density.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Visual Table Summary" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-table-summary.jpeg" alt="Table summary" />
          <br />
          <Typography component="i">
              A visual data summary provides an overview of the accompanying table. It allows the user to spot patterns and issues in aggregate before actioning summary insights.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Pagination" upperTitle disableWidgetMenu>
        <section>
          <h3>Pagination</h3>
          <br />
          <img src="img/data-table-pagination.jpeg" alt="Pagination" />
          <br />
          <Typography component="i">
              Pagination works by presenting a set number of rows in a view, with the ability to navigate to another set. The above example provides the ability to customize the row count per view. Infinite scroll often replaces this pattern. Infinite scroll progressively loads results as a user scrolls. Infinite scroll works well for discovery websites but is usually disastrous for prioritization apps.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Hover Actions" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-hover-actions.gif" alt="Hover actions" />
          <br />
          <Typography component="i">
              Presenting additional action when a user hovers reduces visual clutter. However, it can cause discoverability issues because the user needs to interact with the table to expose the presentation of actions.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Inline Editing" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-inline-editing.gif" alt="Inline editing" />
          <br />
          <Typography component="i">
              Inline editing allows the user to change data without navigating to a separate details view.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Expandable Rows & Master/Detail" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-expandable-rows.gif" alt="Expandable rows" />
          <br />
          <Typography component="i">
              Expandable rows allow the user to evaluate additional information without losing their context.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Quick View" upperTitle disableWidgetMenu>
        <section>
          <h3>Quick View</h3>
          <br />
          <img src="img/data-table-quick-view.gif" alt="Quick view" />
          <br />
          <Typography component="i">
              Much like expandable rows, quick view enables a user to view additional information while staying in-context.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Table Modal" upperTitle disableWidgetMenu>
          <section>
            <br />
            <img src="img/data-table-modal.gif" alt="Modal" />
            <br />
            <Typography component="i">
                Modals allow the user to stay within the table view but provides more focus to the additional information and actions.
            </Typography>
          </section>
      </Widget>

      <br />

      <Widget title="Row to Details" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-row-to-details.gif" alt="Row to details" />
          <br />
          <Typography component="i">
              Clicking on a row link transforms the table into a view with list items on the left and additional details on the right. It enables a user to parse large datasets, as well as reference many items without losing their place.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Sortable Columns" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-sortable-columns.jpeg" alt="Sortable columns" />
          <br />
          <Typography component="i">
              Column sorting allows users to organize rows alphabetically and numerically.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Basic Filtering" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-basic-filtering.jpeg" alt="Basic filtering" />
          <br />
          <Typography component="i">
              Basic filtering allows users to manipulate the data presented in the table.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Filter Columns" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-filter-columns.gif" alt="Filter columns" />
          <br />
          <Typography component="i">
              This design pattern allows users to assign filtering parameters to specific columns.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Searchable Columns" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-searchable-columns.jpeg" alt="Searchable columns" />
          <br />
          <Typography component="i">
              This design pattern allows a user to search specific values within each column.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Add Columns" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-add-columns.jpeg" alt="Add columns" />
          <br />
          <Typography component="i">
              This pattern allows users to add columns from a dataset. It is a way to keep the table’s data limited to essential information and enables the user to add additional columns based on their use case.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Customizable Columns" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-customisable-columns.jpeg" alt="Customisable columns" />
          <br />
          <Typography component="i">
              The customizable columns feature enables users to pick the columns they want to see and sort accordingly. The feature may include the ability to save presets for later use.
          </Typography>
        </section>
      </Widget>

      <br />

      <Widget title="Pinned Rows" upperTitle disableWidgetMenu>
        <section>
          <br />
          <img src="img/data-table-pinned-rows.gif" width="400px" alt="Pinned rows" />
          <br />
          <Typography component="i">
              Typically used for displaying totals or other aggregation, pinned rows can be displayed either at the top or the bottom, and are always visible to the user.
          </Typography>
        </section>
      </Widget>

    </Grid>
 
    <PageTitle title="Tables" />
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <MUIDataTable
          title="Employee List"
          data={datatableData}
          columns={["Name", "Company", "City", "State"]}
          options={{
            filterType: 'checkbox',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Widget title="Material-UI Table" upperTitle noBodyPadding>
          <Table data={mock.table} />
        </Widget>
      </Grid>
      <Grid item xs={12}>
        <Widget title="Material-UI Editable Table" upperTitle noBodyPadding>
          <EditableTable />
        </Widget>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default Tables;