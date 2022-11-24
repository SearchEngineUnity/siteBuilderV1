import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { WarningOutlined } from '@material-ui/icons';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.warning.bgColor,
    borderColor: theme.palette.hlBox.warning.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.warning.linkColor,
    },
  },
  icon: {
    alignSelf: 'center',
    color: theme.palette.hlBox.warning.iconColor,
  },
  text: {
    color: theme.palette.hlBox.warning.textColor,
  },
  link: {
    color: theme.palette.hlBox.definition.linkColor,
  },
}));

function HighlightWarning({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} p={2}>
      <Box display="inline-flex" mb="0.8125em">
        <WarningOutlined className={classes.icon} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
          style={{ marginLeft: '8px' }}
        >
          Warning
        </Typography>
      </Box>

      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightWarning;
