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
  if (rating <= 0.24) {
    starRating = zero;
  } else if (rating >= 0.25 && rating <= 0.49) {
    starRating = quarter;
  } else if (rating >= 0.5 && rating <= 0.74) {
    starRating = half;
  } else if (rating >= 0.75 && rating <= 0.99) {
    starRating = threeQuarters;
  } else if (rating >= 1 && rating <= 1.24) {
    starRating = one;
  } else if (rating >= 1.25 && rating <= 1.49) {
    starRating = onePlusQuarter;
  } else if (rating >= 1.5 && rating <= 1.74) {
    starRating = onePlusHalf;
  } else if (rating >= 1.75 && rating <= 1.99) {
    starRating = onePlusThreeQuarters;
  } else if (rating >= 2 && rating <= 2.24) {
    starRating = two;
  } else if (rating >= 2.25 && rating <= 2.49) {
    starRating = twoPlusQuarter;
  } else if (rating >= 2.5 && rating <= 2.74) {
    starRating = twoPlusHalf;
  } else if (rating >= 2.75 && rating <= 2.99) {
    starRating = twoPlusThreeQuarters;
  } else if (rating >= 3 && rating <= 3.24) {
    starRating = three;
  } else if (rating >= 3.25 && rating <= 3.49) {
    starRating = threePlusQuarter;
  } else if (rating >= 3.5 && rating <= 3.74) {
    starRating = threePlusHalf;
  } else if (rating >= 3.75 && rating <= 3.99) {
    starRating = threePlusThreeQuarters;
  } else if (rating >= 4 && rating <= 4.24) {
    starRating = four;
  } else if (rating >= 4.25 && rating <= 4.49) {
    starRating = fourPlusQuarter;
  } else if (rating >= 4.5 && rating <= 4.74) {
    starRating = fourPlusHalf;
  } else if (rating >= 4.75 && rating <= 4.99) {
    starRating = fourPlusThreeQuarters;
  } else {
    starRating = five;
  }

  return (
    <>
      <img src={starRating} alt="star-rating" height="24px" style={{ verticalAlign: 'middle' }} />
      <Box
        component="span"
        px={1}
        style={{ verticalAlign: 'middle', fontSize: '20px' }}
      >{`${rating}`}</Box>
    </>
  );
}

export default ProductCardRating;
