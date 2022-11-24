// Tile 3

import React from 'react';
import { Box, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    border: '1px solid #acb4b8',
    borderRadius: '0.25rem',
    height: '100%',
  },
});

function TileImageRecSqr({ image, alt, link, title }) {
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
    <Card elevation={link ? 8 : 0} classes={{ root: classes.card }}>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <Box pt={2}>
          <GatsbyImage
            image={imageData}
            alt={alt || ''}
            style={{
              width: '50%',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
        <Box py={2} px={1}>
          <Box fontSize="20px" fontWeight="700" textAlign="center">
            <div>{title}</div>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
