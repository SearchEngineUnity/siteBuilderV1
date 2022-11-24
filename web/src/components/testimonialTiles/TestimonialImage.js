import React from 'react';
import { Card, Grid, CardContent, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles((theme) => ({
  card: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    height: '100%',
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  italic: {
    fontStyle: 'italic',
  },
  space: {
    marginBottom: '16px',
  },
  avatar: {
    width: '100px',
    height: '100px',
    fontSize: theme.typography.h2.fontSize,
  },
  cardContent: {
    padding: '8px 16px',
    '&:last-child': {
      paddingBottom: '8px',
    },
  },
}));

function TestimonialImage({ image, alt, name, text, role, company }) {
  const classes = useStyles();

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <Card elevation={0} classes={{ root: classes.card }} square>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="body1" className={`${classes.italic} ${classes.space}`}>
              {text}
            </Typography>
            <Typography variant="body1" className={`${classes.bold} ${classes.italic}`}>
              {'- '}
              {name}
              {printedRole}
              {printedCompany}
            </Typography>
          </Grid>
          <Grid item>
            {image ? (
              <GatsbyImage
                image={imageData}
                alt={alt || ''}
                style={{ width: '100px', height: '100px', borderRadius: '50px' }}
              />
            ) : (
              <Avatar className={classes.avatar}>{name[0].toUpperCase()}</Avatar>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TestimonialImage;
