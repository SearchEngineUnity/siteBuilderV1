import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';

function StructuredSectionHeader({
  heading,
  subheading,
  subtitle,
  headingColor,
  subheadingColor,
  subtitleColor,
  align,
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
}) {
  return (
    <>
      {(!hasSectionHeading && heading) ||
      (!hasSectionSubheading && subheading) ||
      (!hasSectionSubtitle && subtitle) ? (
        <Box component={heading ? 'header' : 'div'} mb={{ xs: 2, sm: 4 }} textAlign={align}>
          {!hasSectionHeading && heading && (
            <Box component={Typography} variant="h1" gutterBottom color={headingColor}>
              {heading}
            </Box>
          )}
          {!hasSectionSubheading && subheading && (
            <Box component={Typography} variant="h2" gutterBottom color={subheadingColor}>
              {subheading}
            </Box>
          )}
          {!hasSectionSubtitle && subtitle && (
            <Box color={subtitleColor}>
              <Subtitle blocks={subtitle} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}
export default StructuredSectionHeader;
