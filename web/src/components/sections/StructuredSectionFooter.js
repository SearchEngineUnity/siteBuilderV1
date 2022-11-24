import React from 'react';
import { Box } from '@material-ui/core';
import Footer from '../portableText/serializer/HeroFooterSerializer';

function StructuredSectionFooter({ footer, footerColor, align, hasSectionFooter }) {
  return (
    <>
      {!hasSectionFooter && footer && (
        <Box
          component={hasSectionFooter ? 'div' : 'footer'}
          color={footerColor}
          mt={{ xs: 2, sm: 4 }}
          textAlign={align}
        >
          <Footer blocks={footer} />
        </Box>
      )}
    </>
  );
}
export default StructuredSectionFooter;
