/* eslint-disable no-param-reassign */
import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    position: 'sticky',
    top: 0,
  },
  list: {
    '& > *': {
      display: 'block',
    },
  },
  activeLink: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));

// Used to calculate each heading's offset from the top of the page.
// This will be compared to window.scrollY to determine which heading
// is currently active.
const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
};

function Toc({ toc }) {
  const style = useStyles();

  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
  });

  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState(null);

  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    // Fallback to sensible defaults for headingSelector, getTitle and getDepth
    // inside useEffect rather than specifying them as Toc default props to avoid
    // the need for useMemo and useCallback, resp.
    // Otherwise, these would change on every render and since this effect calls
    // setHeadings which triggers a rerender, it would cause an infinite loop.
    // The default selector targets all headings (h1, h2, ..., h6) inside
    // a main element. You can pass in whatever string or array of strings
    // targets all the headings you want to appear in the ToC.
    const nodes = Array.from(document.querySelectorAll('h2'));

    const titles = nodes.map((node, index) => ({
      title: toc[index].title,
      id: node.id,
    }));

    setHeadings({ titles, nodes });
  }, [toc]);

  const ids = headings.titles.map((x) => x.id);

  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    const scrollHandler = () => {
      const { titles, nodes } = headings;
      // Offsets need to be recomputed inside scrollHandler because
      // lazily-loaded content increases offsets as user scrolls down.
      const offsets = nodes.map((el) => accumulateOffsetTop(el));
      const activeIndex = offsets.findIndex((offset) => offset > window.scrollY);
      setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1);
    };
    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);

  // add hash on scroll based on current active heading
  useEffect(() => {
    if (active === -1 || active === null) {
      window.history.replaceState(null, null, ' ');
    } else {
      window.history.replaceState(
        null,
        null,
        `${window.location.origin + window.location.pathname}#${headings.titles[active].id}`,
      );
    }
  }, [active, headings]);

  return (
    <Box p={3} className={style.root}>
      <Typography component="p" variant="h6">
        Table of Content
      </Typography>
      <br />
      <Typography className={style.list} variant="body1">
        {/* {toc.map((link) => componentTypeSwitch(link))} */}
        {headings.titles.map(({ title, id }, index) => (
          <Link
            to={`#${id}`}
            className={`${active === index ? style.activeLink : null} ${style.link}`}
            underline="none"
            key={title}
            onClick={(e) => {
              e.preventDefault();
              window.history.replaceState(
                null,
                null,
                `${window.location.origin + window.location.pathname}#${id}`,
              );
              headings.nodes[index].scrollIntoView({
                behavior: `smooth`,
                block: `start`,
              });
            }}
          >
            {title}
          </Link>
        ))}
      </Typography>
    </Box>
  );
}

export default Toc;
