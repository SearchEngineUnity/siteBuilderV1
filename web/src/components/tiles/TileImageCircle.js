// tile 2

import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    borderRadius: '10000px',
  },
});

function TileImageCircle({ image, alt, link }) {
  const classes = useStyles();

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card square elevation={link ? 8 : 0} classes={{ root: classes.card }}>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <GatsbyImage image={imageData} alt={alt || ''} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageCircle;
