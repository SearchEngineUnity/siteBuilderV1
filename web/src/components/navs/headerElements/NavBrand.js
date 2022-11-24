import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  primaryOutline: {
    outlineColor: theme.palette.primary.main,
  },
}));

function NavBrand({ url, brandGroup, alt }) {
  const classes = useStyles();

  return (
    <>
      {brandGroup.map((group) => {
        const { type, brand, _key } = group;
        const height = group.height || 48;
        const { aspectRatio } = group.brand.logo.asset.metadata.dimensions;

        switch (type) {
          case 'desktop':
            return (
              <Box display={{ xs: 'none', lg: 'block', xl: 'block' }} key={_key} role="none">
                <a href={url} role="menuitem" className={classes.primaryOutline}>
                  <img
                    src={brand.logo.asset.url}
                    alt={alt}
                    height={height}
                    width={height * aspectRatio}
                    loading="eager"
                  />
                </a>
              </Box>
            );
          case 'tablet':
            return (
              <Box
                display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}
                key={_key}
                role="none"
              >
                <a href={url} role="menuitem" className={classes.primaryOutline}>
                  <img
                    src={brand.logo.asset.url}
                    alt={alt}
                    height={height}
                    width={height * aspectRatio}
                    loading="eager"
                  />
                </a>
              </Box>
            );
          case 'mobile':
            return (
              <Box
                display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}
                key={_key}
                role="none"
              >
                <a href={url} role="menuitem" className={classes.primaryOutline}>
                  <img
                    src={brand.logo.asset.url}
                    alt={alt}
                    height={height}
                    width={height * aspectRatio}
                    loading="eager"
                  />
                </a>
              </Box>
            );

          default:
            return <div>under construction</div>;
        }
      })}
    </>
  );
}

export default NavBrand;
