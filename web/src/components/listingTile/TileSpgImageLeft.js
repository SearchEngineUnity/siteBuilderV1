import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardActionArea } from 'gatsby-theme-material-ui';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  cardContent: {
    paddingRight: '32px',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '16px',
    },
  },
}));

function TileImageRecSqr({ image, alt, url, title, text, date }) {
  const classes = useStyles();
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card elevation={8} classes={{ root: classes.card }} square>
      {/* the link probably cannot be spread in the same way as from regular tiles */}
      <CardActionArea to={`/${url}`}>
        <Grid container spacing={2}>
          <Grid item md={4} sm={3} xs={12}>
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{
                width: '100%',
                height: '100%',
              }}
              imgStyle={{
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item md={8} sm={9} xs={12}>
            <CardContent className={classes.cardContent}>
              <Box fontSize="1.6rem" fontWeight="800" mb={1}>
                {title}
              </Box>
              <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
                <em>{lastUpdatedDate.toLocaleDateString('en-US', options)}</em>
              </Typography>
              <Typography variant="body1" component="p">
                {text}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
