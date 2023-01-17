/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in party by index of the cell in the array and
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
import { makeStyles } from '@material-ui/core/styles';
import TableContent from '../serializer/TableSerializer';
import Illustration from './Illustration';
import VideoEmbed from './VideoEmbed';
import ClickableImage from './ClickableImage';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import TableSmartOrderedList from './TableSmartOrderedList';
import TableSmartUnorderedList from './TableSmartUnorderedList';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const useStyles = makeStyles({
  table: (props) => ({
    tableLayout: 'fixed',
    minWidth: props.minWidth,
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

function SmartTable({ smartTable }) {
  const { colHeading, rowHeading, title, minWidth, colgroup } = smartTable;
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
                if (cell._type === 'tablePtCell') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{overflow: 'hidden'}} scope="col" role="columnheader">
                      <TableContent blocks={cell.copy} />
                    </TableCell>
                  );
                }
                if (cell._type === 'illustration') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <Illustration illustration={cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'clickableImage') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <ClickableImage {...cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'externalLink') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <ButtonExternal {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'internalLocal') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <ButtonInternalLocal {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'internalGlobal') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <ButtonInternalGlobal {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'affiliateLink') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <ButtonAffiliate {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'jumpLink') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <ButtonJumpLink {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'videoEmbed') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <VideoEmbed {...cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'smartOrderedList') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <TableSmartOrderedList {...cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'smartUnorderedList') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="col" role="columnheader">
                      <TableSmartUnorderedList {...cell} />
                    </TableCell>
                  );
                }

                return <TableCell>Uh oh something went wrong.</TableCell>;
              })}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tbody.map((row) => (
            <TableRow key={row._key} className={classes.row}>
              {row.cells.map((cell, index) => {
                if (rowHeading && index === 0) {
                  if (cell._type === 'emptyCell') {
                    return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                  }
                  if (cell._type === 'tablePtCell') {
                    return (
                      // eslint-disable-next-line
                      <TableCell className="MuiTableCell-head" component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <TableContent blocks={cell.copy} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'illustration') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <Illustration illustration={cell} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'clickableImage') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <ClickableImage {...cell} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'externalLink') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <ButtonExternal {...mapMuiBtnToProps(cell)} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'internalLocal') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <ButtonInternalLocal {...mapMuiBtnToProps(cell)} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'internalGlobal') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <ButtonInternalGlobal {...mapMuiBtnToProps(cell)} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'affiliateLink') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <ButtonAffiliate {...mapMuiBtnToProps(cell)} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'jumpLink') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <ButtonJumpLink {...mapMuiBtnToProps(cell)} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'videoEmbed') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <VideoEmbed {...cell} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'smartOrderedList') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <TableSmartOrderedList {...cell} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'smartUnorderedList') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} scope="row" role="rowheader">
                        <TableSmartUnorderedList {...cell} />
                      </TableCell>
                    );
                  }

                  return <TableCell component="th">oh oh something is wrong</TableCell>;
                }
                if (cell._type === 'emptyCell') {
                  return <TableCell key={`${thead._key}-${index}`} role="cell" />;
                }
                if (cell._type === 'tablePtCell') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <TableContent blocks={cell.copy} />
                    </TableCell>
                  );
                }
                if (cell._type === 'illustration') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <Illustration illustration={cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'clickableImage') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <ClickableImage {...cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'externalLink') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <ButtonExternal {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'internalLocal') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <ButtonInternalLocal {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'internalGlobal') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <ButtonInternalGlobal {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'affiliateLink') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <ButtonAffiliate {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'btnBlockMui' && cell.link[0]._type === 'jumpLink') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <ButtonJumpLink {...mapMuiBtnToProps(cell)} />
                    </TableCell>
                  );
                }
                if (cell._type === 'videoEmbed') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <VideoEmbed {...cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'smartOrderedList') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <TableSmartOrderedList {...cell} />
                    </TableCell>
                  );
                }
                if (cell._type === 'smartUnorderedList') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top', overflow: 'hidden' }} role="cell">
                      <TableSmartUnorderedList {...cell} />
                    </TableCell>
                  );
                }

                return <TableCell>oh oh something is wrong</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SmartTable;
