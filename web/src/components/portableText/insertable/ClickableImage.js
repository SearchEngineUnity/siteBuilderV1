import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    borderRadius: (props) => props.borderRadius,
    maxHeight: (props) => `${props.height}px`,
    maxWidth: (props) => `${props.width}px`,
  },
});

function ClickableImage({ image, alignment, link, borderRadius }) {
  const imageFluid = image?.asset;
  const imageData = getGatsbyImageData(imageFluid, { layout: 'constrained' }, sanityConfig);
  const height = image?.asset?.height;
  const width = image?.asset?.width;

  const classes = useStyles({ borderRadius, height, width });
  const linkType = link[0]?._type;

  return (
    <Box display="flex" justifyContent={alignment}>
      <Card className={classes.card} elevation={2}>
        <ConditionalCardActionArea condition={linkType} link={link[0]}>
          <GatsbyImage image={imageData} alt={image.alt || ''} />
        </ConditionalCardActionArea>
      </Card>
    </Box>
  );
}

export default ClickableImage;
