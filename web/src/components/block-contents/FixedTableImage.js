import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function FixedTableImage({ illustration }) {
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, { layout: 'fixed' }, sanityConfig);

  return (
    <Box component="figure" justifyContent={illustration.align}>
      <Box my="auto" mx="auto">
        <GatsbyImage
          image={fluidProps}
          // eslint-disable-next-line no-unneeded-ternary
          alt={illustration.alt ? illustration.alt : ''}
        />
        {illustration.caption && (
          <Typography component="figcaption" variant="caption">
            <em>{illustration.caption}</em>
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default FixedTableImage;
