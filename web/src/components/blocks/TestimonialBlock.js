import React from 'react';
import { Grid } from '@material-ui/core';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';
import Tile1 from '../testimonialTiles/TestimonialImage';
import Tile2 from '../testimonialTiles/TestimonialPlain';
import { mapTestimonialToProps } from '../../lib/mapToProps';

function TestimonialBlock({
  hasSectionHeading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subtitle,
  testimonialList,
  footer,
  headerAlignment,
  footerAlignment,
  headingColor,
  subtitleColor,
  footerColor,
  layout,
  tileOption,
}) {
  // number of tiles desktop/table/mobile: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <>
      <StructuredSectionHeader
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subtitleColor={subtitleColor}
      />
      <Grid container spacing={3}>
        {testimonialList.map((testimonial) => {
          const tileSelector = (key) => {
            switch (key) {
              case '1':
                return <Tile1 {...mapTestimonialToProps(testimonial)} />;
              case '2':
                return <Tile2 {...mapTestimonialToProps(testimonial)} />;
              default:
                return <div> Tile still under development</div>;
            }
          };
          return (
            <Grid item key={testimonialList._key} {...col}>
              {tileSelector(tileOption)}
            </Grid>
          );
        })}
      </Grid>
      <StructuredSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}

export default TestimonialBlock;
