import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Link } from '@material-ui/core';
import { useHeadsObserver } from '../hooks/useHeadObserver';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    position: 'sticky',
    top: 0,
  },
  activeLink: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: '0px',
  },
}));

function TableOfContent({ toc }) {
  const classes = useStyles();
  const { activeId } = useHeadsObserver();

  return (
    <Box p={3} className={classes.root} display={{ xs: 'block' }}>
      <Typography component="p" variant="h4" gutterBottom>
        Table of Contents
      </Typography>
      <nav>
        <ul className={classes.list}>
          {toc.map((item) => (
            <Box component="li" fontSize="body2.fontSize" key={item._key} mb={1}>
              <Link
                className={`${item.hashID === activeId ? classes.activeLink : null}`}
                href={`#${item.hashId}`}
                underline="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.hashID}`).scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {item.title}
              </Link>
            </Box>
          ))}
        </ul>
      </nav>
    </Box>
  );
}

export default TableOfContent;
