/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in part by index of the cell in the array and
// not a true unique ID. Once we start to dynamically change the array. This will fail.

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
import TableContent from '../serializer/TableSerializer';
import Illustration from './Illustration';
import VideoEmbed from './VideoEmbed';
import ClickableImage from './ClickableImage';
import ConditionalButton from '../../buttons/ConditionalButton';
import TableSmartOrderedList from './TableSmartOrderedList';
import TableSmartUnorderedList from './TableSmartUnorderedList';

const useStyles = makeStyles({
  table: (props) => ({
    tableLayout: 'fixed',
    minWidth: props.minWidth,
    borderCollapse: 'separate',
  }),
  row: {
    verticalAlign: 'top',
  },
  crossed: {
    background:
      'linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 1px), rgba(224, 224, 224, 1) 50%, rgba(0,0,0,0) calc(50% + 1px), rgba(0,0,0,0) 100%);',
  },
  split: {
    position: 'relative',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
  splitRight: {
    float: 'right',
  },
  noWrap: {
    whiteSpace: 'nowrap',
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

const SplitCellError = () => <td>this table should have column heading and row heading</td>;

const componentMapping = {
  tablePtCell: TableContent,
  illustration: Illustration,
  videoEmbed: VideoEmbed,
  clickableImage: ClickableImage,
  btnBlockMui: ConditionalButton,
  smartOrderedList: TableSmartOrderedList,
  smartUnorderedList: TableSmartUnorderedList,
  splitCell: SplitCellError,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'tablePtCell':
      return { blocks: props.copy };
    case 'illustration':
      return { illustration: props };
    case 'btnBlockMui':
      return { condition: props.link[0]._type, values: props };
    default:
      return props;
  }
};

function SmartTable({ smartTable }) {
  const { colHeading, rowHeading, title, minWidth, colgroup, fixedFirstColumn } = smartTable;
  const classes = useStyles({ minWidth });

  let thead = [];
  let tbody = smartTable.table.rows;

  if (colHeading) {
    thead = smartTable.table.rows[0]; // eslint-disable-line
    tbody = smartTable.table.rows.slice(1);
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
                // check if a !cell is required if we are no longer applying a role?
                if (fixedFirstColumn && index === 0) {
                  if (cell._type === 'emptyCell') {
                    return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  if (cell._type === 'splitCell') {
                    return (
                      <StickyTableCell
                        key={`${thead._key}-${index}`}
                        style={{ overflow: 'hidden' }}
                        scope="col"
                        role="columnheader"
                        className={classes.crossed}
                      >
                        <div className={classes.split}>
                          <div className={`${classes.splitRight} ${classes.noWrap}`}>
                            {cell.splitColHead}
                          </div>
                          <br />
                          <div className={classes.noWrap}>{cell.splitRowHead}</div>
                        </div>
                      </StickyTableCell>
                    );
                  }
                  const Component = componentMapping[cell._type];
                  const values = propsMapping(cell._type, cell);
                  return (
                    // eslint-disable-next-line
                  <StickyTableCell key={`${thead._key}-${index}`} style={{overflow: 'hidden'}} scope="col" role="columnheader">
                      <Component {...values} />
                    </StickyTableCell>
                  );
                }
                if (cell._type === 'emptyCell') {
                  return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                }
                if (cell._type === 'splitCell') {
                  return (
                    <TableCell
                      key={`${thead._key}-${index}`}
                      style={{ overflow: 'hidden' }}
                      scope="col"
                      role="columnheader"
                      className={classes.crossed}
                    >
                      <div className={classes.split}>
                        <div className={`${classes.splitRight} ${classes.noWrap}`}>
                          {cell.splitColHead}
                        </div>
                        <br />
                        <div className={classes.noWrap}>{cell.splitRowHead}</div>
                      </div>
                    </TableCell>
                  );
                }
                const Component = componentMapping[cell._type];
                const values = propsMapping(cell._type, cell);
                return (
                  // eslint-disable-next-line
                <TableCell key={`${thead._key}-${index}`} style={{overflow: 'hidden'}} scope="col" role="columnheader">
                    <Component {...values} />
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
                const Component = componentMapping[cell._type];
                const values = propsMapping(cell._type, cell);
                if (rowHeading && index === 0) {
                  if (fixedFirstColumn) {
                    if (cell._type === 'emptyCell') {
                      return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                    }
                    return (
                      <StickyTableCell
                        component="th"
                        key={`${row._key}-${index}`}
                        style={{ verticalAlign: 'top', overflow: 'hidden' }}
                        scope="row"
                        role="rowheader"
                      >
                        <Component {...values} />
                      </StickyTableCell>
                    );
                  }
                  if (cell._type === 'emptyCell') {
                    return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  return (
                    <TableCell
                      component="th"
                      key={`${row._key}-${index}`}
                      style={{ verticalAlign: 'top', overflow: 'hidden' }}
                      scope="row"
                      role="rowheader"
                    >
                      <Component {...values} />
                    </TableCell>
                  );
                }
                if (fixedFirstColumn && index === 0) {
                  if (cell._type === 'emptyCell') {
                    return <StickyTableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  return (
                    <StickyTableCell
                      key={`${row._key}-${index}`}
                      style={{ verticalAlign: 'top', overflow: 'hidden' }}
                      role="cell"
                    >
                      <Component {...values} />
                    </StickyTableCell>
                  );
                }
                if (cell._type === 'emptyCell') {
                  return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                }
                return (
                  <TableCell
                    key={`${row._key}-${index}`}
                    style={{ verticalAlign: 'top', overflow: 'hidden' }}
                    role="cell"
                  >
                    <Component {...values} />
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

export default SmartTable;
