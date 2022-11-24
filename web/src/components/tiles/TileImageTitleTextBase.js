// Tile 4

import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    border: '1px solid #acb4b8',
    height: '100%',
  },
});

function TileImageRecSqr({ image, alt, link, title, text }) {
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
    <Card elevation={link ? 8 : 0} classes={{ root: classes.card }} square>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <GatsbyImage image={imageData} alt={alt || ''} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
