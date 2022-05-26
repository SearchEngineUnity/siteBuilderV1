import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EmojiObjectsOutlined } from '@material-ui/icons/';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.dyk.bgColor,
    borderColor: theme.palette.hlBox.dyk.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.dyk.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.dyk.iconColor,
  },
  text: {
    color: theme.palette.hlBox.dyk.textColor,
  },
  link: {
    color: theme.palette.hlBox.definition.linkColor,
  },
}));

function HighlightDidYouKnow({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <EmojiObjectsOutlined className={classes.icon} /> Did You Know
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightDidYouKnow;
