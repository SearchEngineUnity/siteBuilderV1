// // Tile 5

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: '0px',
  },
}));

export default function TileSmImageTitleText({ image, alt, link, title, text }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  const classes = useStyles();

  return (
    <Card square elevation={link ? 8 : 0}>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <CardHeader
          className={classes.header}
          avatar={
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{
                height: '50px',
                width: '50px',
              }}
            />
          }
          title={
            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
              {title}
            </Box>
          }
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}
