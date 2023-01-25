/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: (props) => ({
    tableLayout: 'fixed',
    minWidth: props.minWidth,
    borderCollapse: 'separate',
  }),
  row: {
    verticalAlign: 'top',
  },
});

const StickyTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.paper,
    left: 0,
    position: 'sticky',
    zIndex: 1,
    borderRight: '1px solid rgba(229, 228, 232, 1)',
    overflow: 'hidden',
  },
  body: {
    backgroundColor: theme.palette.background.paper,
    left: 0,
    position: 'sticky',
    zIndex: 1,
    borderRight: '1px solid rgba(229, 228, 232, 1)',
    overflow: 'hidden',
  },
}))(TableCell);

function BasicTable({ basicTable }) {
  const { colHeading, rowHeading, title, minWidth, colgroup, fixedFirstColumn } = basicTable;
  const classes = useStyles({ minWidth });

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label={title} role="table">
        {colgroup && (
          <colgroup>
            {colgroup.map((col, index) =>
              col.width !== '0' ? (
                <col span="1" style={{ width: col.width }} key={`colWidth-${index}`} />
              ) : (
                <col key={`colWidth-${index}`} span="1" style={{ width: 'auto' }} />
              ),
            )}
          </colgroup>
        )}
        {colHeading && (
          <TableHead>
            <TableRow key={thead._key}>
              {thead.cells.map((cell, index) => {
                if (fixedFirstColumn && index === 0) {
                  // check if a !cell is required if we are no longer applying a role?
                  if (!cell) {
                    return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  return (
                    <StickyTableCell key={`${thead._key}-${index}`} scope="col">
                      {cell}
                    </StickyTableCell>
                  );
                }
                if (!cell) {
                  return <td key={`${thead._key}-${index}`} role="cell" />;
                }
                return (
                  <TableCell
                    key={`${thead._key}-${index}`}
                    scope="col"
                    role="columnheader"
                    style={{ overflow: 'hidden' }}
                  >
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tbody.map((row) => (
            <TableRow key={row._key} className={classes.row}>
              {row.cells.map((cell, index) => {
                if (rowHeading && index === 0) {
                  if (fixedFirstColumn) {
                    return (
                      <StickyTableCell
                        className="MuiTableCell-head"
                        component="th"
                        key={`${row._key}-${index}`}
                        scope="row"
                        role="rowheader"
                        style={{ overflow: 'hidden' }}
                      >
                        {cell}
                      </StickyTableCell>
                    );
                  }
                  return (
                    <TableCell
                      className="MuiTableCell-head"
                      component="th"
                      key={`${row._key}-${index}`}
                      scope="row"
                      role="rowheader"
                      style={{ overflow: 'hidden' }}
                    >
                      {cell}
                    </TableCell>
                  );
                }
                if (fixedFirstColumn && index === 0) {
                  return (
                    <StickyTableCell
                      key={`${row._key}-${index}`}
                      style={{ overflow: 'hidden' }}
                      role="cell"
                    >
                      {cell}
                    </StickyTableCell>
                  );
                }
                return (
                  <TableCell
                    key={`${row._key}-${index}`}
                    style={{ overflow: 'hidden' }}
                    role="cell"
                  >
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
