/* eslint-disable import/no-cycle */
// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListContent from '../serializer/ListSerializer';

const useStyles = makeStyles({
  list: {
    listStylePosition: 'inside',
    listStyle: 'none',
    paddingLeft: '0px',
    marginBottom: '0px',
  },
  removeMargin: {
    marginBottom: '0px',
    marginTop: '0px',
    paddingLeft: '16px',
  },
});

function TableSmartOrderedList({ listItems }) {
  const classes = useStyles();
  const fontStyles = {
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
  };

  const selectedStyle = listItems[0].content[0].style;
  const listStyle = fontStyles[selectedStyle] || 'body1';

  return (
    <ol className={listStyle === 'body1' ? classes.removeMargin : classes.list}>
      {listItems.map((li) => (
        <Typography variant={listStyle} component="li" key={li._key}>
          <ListContent blocks={li.content} />
        </Typography>
      ))}
    </ol>
  );
}

export default TableSmartOrderedList;
