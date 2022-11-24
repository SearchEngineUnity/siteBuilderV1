import React from 'react';
import { Card } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../../sanityConfig';

function NavClickableImage({ image, link }) {
  const imageFluid = image?.asset;
  const imageData = getGatsbyImageData(imageFluid, { layout: 'constrained' }, sanityConfig);
  const linkType = link[0]?._type;

  return (
    <Card elevation={0}>
      <ConditionalCardActionArea condition={linkType} link={link[0]}>
        <GatsbyImage image={imageData} loading="eager" alt={image.alt || ''} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default NavClickableImage;
