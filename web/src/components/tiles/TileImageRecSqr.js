// tile 1

import React from 'react';
import { Card } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

function TileImageRecSqr({ image, alt, link }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card square elevation={link ? 8 : 0}>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <GatsbyImage image={imageData} alt={alt || ''} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
