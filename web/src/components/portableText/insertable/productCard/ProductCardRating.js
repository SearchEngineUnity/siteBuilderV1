import React from 'react';
import { Box } from '@material-ui/core';
import zero from './assets/rating-stars-grey-background-0-of-5.png';
import quarter from './assets/rating-stars-grey-background-0.25-of-5.png';
import half from './assets/rating-stars-grey-background-0.5-of-5.png';
import threeQuarters from './assets/rating-stars-grey-background-0.75-of-5.png';
import one from './assets/rating-stars-grey-background-1-of-5.png';
import onePlusQuarter from './assets/rating-stars-grey-background-1.25-of-5.png';
import onePlusHalf from './assets/rating-stars-grey-background-1.5-of-5.png';
import onePlusThreeQuarters from './assets/rating-stars-grey-background-1.75-of-5.png';
import two from './assets/rating-stars-grey-background-2-of-5.png';
import twoPlusQuarter from './assets/rating-stars-grey-background-2.25-of-5.png';
import twoPlusHalf from './assets/rating-stars-grey-background-2.5-of-5.png';
import twoPlusThreeQuarters from './assets/rating-stars-grey-background-2.75-of-5.png';
import three from './assets/rating-stars-grey-background-3-of-5.png';
import threePlusQuarter from './assets/rating-stars-grey-background-3.25-of-5.png';
import threePlusHalf from './assets/rating-stars-grey-background-3.5-of-5.png';
import threePlusThreeQuarters from './assets/rating-stars-grey-background-3.75-of-5.png';
import four from './assets/rating-stars-grey-background-4-of-5.png';
import fourPlusQuarter from './assets/rating-stars-grey-background-4.25-of-5.png';
import fourPlusHalf from './assets/rating-stars-grey-background-4.5-of-5.png';
import fourPlusThreeQuarters from './assets/rating-stars-grey-background-4.75-of-5.png';
import five from './assets/rating-stars-grey-background-5-of-5.png';

function ProductCardRating({ rating }) {
  let starRating = zero;
  if (rating <= 0.124) {
    starRating = zero;
  } else if (rating >= 0.125 && rating <= 0.374) {
    starRating = quarter;
  } else if (rating >= 0.375 && rating <= 0.624) {
    starRating = half;
  } else if (rating >= 0.625 && rating <= 0.874) {
    starRating = threeQuarters;
  } else if (rating >= 0.875 && rating <= 1.124) {
    starRating = one;
  } else if (rating >= 1.125 && rating <= 1.374) {
    starRating = onePlusQuarter;
  } else if (rating >= 1.375 && rating <= 1.624) {
    starRating = onePlusHalf;
  } else if (rating >= 1.625 && rating <= 1.874) {
    starRating = onePlusThreeQuarters;
  } else if (rating >= 1.875 && rating <= 2.124) {
    starRating = two;
  } else if (rating >= 2.125 && rating <= 2.374) {
    starRating = twoPlusQuarter;
  } else if (rating >= 2.375 && rating <= 2.624) {
    starRating = twoPlusHalf;
  } else if (rating >= 2.625 && rating <= 2.874) {
    starRating = twoPlusThreeQuarters;
  } else if (rating >= 2.875 && rating <= 3.124) {
    starRating = three;
  } else if (rating >= 3.125 && rating <= 3.374) {
    starRating = threePlusQuarter;
  } else if (rating >= 3.375 && rating <= 3.624) {
    starRating = threePlusHalf;
  } else if (rating >= 3.625 && rating <= 3.874) {
    starRating = threePlusThreeQuarters;
  } else if (rating >= 3.875 && rating <= 4.124) {
    starRating = four;
  } else if (rating >= 4.125 && rating <= 4.374) {
    starRating = fourPlusQuarter;
  } else if (rating >= 4.375 && rating <= 4.624) {
    starRating = fourPlusHalf;
  } else if (rating >= 4.625 && rating <= 4.874) {
    starRating = fourPlusThreeQuarters;
  } else {
    starRating = five;
  }

  return (
    <Box py={1}>
      <img
        src={starRating}
        alt="star-rating"
        height="24px"
        style={{ verticalAlign: 'middle' }}
        loading="eager"
      />
      <Box
        component="span"
        px={1}
        style={{ verticalAlign: 'middle', fontSize: '20px' }}
      >{`${rating}`}</Box>
    </Box>
  );
}

export default ProductCardRating;
