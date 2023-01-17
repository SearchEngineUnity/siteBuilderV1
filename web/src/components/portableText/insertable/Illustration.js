import React from 'react';
import { Box } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../sanityConfig';
import CaptionContent from '../serializer/CaptionSerializer';

function Illustration({ illustration, loading }) {
  const loadingSetting = loading || 'lazy';
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const customMaxHeight = illustration.maxHeight || 'auto';
  const customMaxWidth = illustration.maxWidth || 'auto';
  const imageWidth = imageFluid.metadata.dimensions.width;
  const imgAspectRatio = imageFluid.metadata.dimensions.aspectRatio;

  const calculatedWidthBasedOnCustomMaxWidth =
    customMaxWidth === 'auto' ? imageWidth : customMaxWidth;

  const calculatedWidthBasedOnCustomMaxHeight =
    customMaxHeight === 'auto' ? imageWidth : customMaxHeight * imgAspectRatio;

  const widthArray = [
    imageWidth,
    calculatedWidthBasedOnCustomMaxWidth,
    calculatedWidthBasedOnCustomMaxHeight,
  ];

  const minMaxWidth = `${Math.min(...widthArray)}px`;

  // if (minMaxWidth === `${imageWidth}px`) {
  //   minMaxWidth = 'auto';
  // }

  return (
    <Box component="figure" display="flex" justifyContent={illustration.align} m={0}>
      <Box maxWidth={minMaxWidth}>
        <GatsbyImage
          style={{
            maxHeight: customMaxHeight,
            maxWidth: customMaxWidth,
            display: 'block',
          }}
          image={fluidProps}
          // eslint-disable-next-line no-unneeded-ternary
          alt={illustration.alt ? illustration.alt : ''}
          loading={loadingSetting}
          objectFit="contain"
        />
        {illustration.caption && <CaptionContent blocks={illustration.caption} />}
      </Box>
    </Box>
  );
}

export default Illustration;
