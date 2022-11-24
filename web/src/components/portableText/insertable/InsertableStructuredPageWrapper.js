import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  block: {
    marginTop: '13px',
    '&:first-child': {
      marginTop: '0px',
    },
    marginBottom: '13px',
    '&:last-child': {
      marginBottom: '0px',
    },
  },
});

const InsertableStructuredPageWrapper = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.block}>{children}</div>;
};

export default InsertableStructuredPageWrapper;
