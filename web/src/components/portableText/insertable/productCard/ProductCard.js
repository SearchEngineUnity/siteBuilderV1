/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Card, Paper, Box, Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ProductCardFlexSegment from './ProductCardFlexSegment';
import ProductCardDividerSegment from './ProductCardDividerSegment';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ButtonAffiliate from '../../../buttons/ButtonAffiliate';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';
import sanityConfig from '../../../../../sanityConfig';
import Caption from '../../serializer/CaptionSerializer';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    minWidth: '375px',
    maxWidth: '770px',
  },
  paper: {
    display: 'flex',
    width: '50vw',
    height: '50vh',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: 'center',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    color: 'white',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enlarge: {
    border: 'none',
    background: 'none',
    height: 'auto',
    width: '100%',
    cursor: 'pointer',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.4,
      },
    },
  },
  focusVisible: {},
  tag: {
    backgroundColor: (props) => props.tagColor.color.hex,
    color: '#fff',
    position: 'absolute',
    top: '-20px',
    left: '-10px',
    display: 'inline-block',
    padding: '8px 16px',
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: theme.typography.fontWeightBold,
    '&:after': {
      content: '" "',
      display: 'block',
      position: 'absolute',
      left: '-10px',
      bottom: '-7px',
      borderWidth: '0 10px 7px',
      borderColor: (props) =>
        `rgba(0, 0, 0, 0) ${props.tagColor.color.hex} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
      borderStyle: 'inset solid inset inset',
      filter: ' brightness(50%)',
    },
  },
  wrapper: {
    position: 'relative',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      gridGap: `${theme.spacing(3)}px 0px`,
    },
  },
  imageItem: {
    gridColumnEnd: 'span 4',
    gridRowEnd: 'span 2',
    order: 1,
    [theme.breakpoints.down('sm')]: {
      gridColumnEnd: 'span 3',
    },
    [theme.breakpoints.down('xs')]: {
      gridColumnEnd: 'span 12',
      order: 2,
    },
  },
  titleItem: {
    gridColumnEnd: 'span 8',
    alignSelf: 'end',
    order: 2,
    [theme.breakpoints.down('sm')]: {
      gridColumnEnd: 'span 9',
    },
    [theme.breakpoints.down('xs')]: {
      gridColumnEnd: 'span 12',
      order: 1,
    },
  },
  infoItem: {
    gridColumnEnd: 'span 8',
    alignSelf: 'start',
    order: 3,
    [theme.breakpoints.down('sm')]: {
      gridColumnEnd: 'span 9',
    },
    [theme.breakpoints.down('xs')]: {
      gridColumnEnd: 'span 12',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '-12px',
    width: 'calc(100% + 24px)',
  },
  nameItem: {
    flexGrow: 9999,
    flexBasis: '200px',
    padding: '12px',
  },
  topButton: {
    flexBasis: '30%',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
    flexGrow: 1,
    padding: '12px',
  },
}));

function ProductCard({
  name,
  headingLevel,
  rating,
  image,
  tagText,
  tagColor,
  infoList,
  topBtn,
  segments,
}) {
  const classes = useStyles({ tagColor });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'constrained',
    },
    sanityConfig,
  );

  return (
    <>
      <br />
      <div className={classes.wrapper}>
        <Card>
          <Paper elevation={3} className={classes.tag} square>
            {tagText}
          </Paper>
          <Box margin={3}>
            <div className={classes.container}>
              <div className={classes.imageItem}>
                <ButtonBase
                  type="button"
                  onClick={handleOpen}
                  className={classes.enlarge}
                  focusVisibleClassName={classes.focusVisible}
                >
                  <GatsbyImage
                    image={imageData}
                    alt={image?.alt}
                    style={{ display: 'block', maxWidth: '100%', maxHeight: '300px' }}
                    objectFit="contain"
                  />
                  <span className={classes.imageBackdrop}>
                    <ZoomInIcon style={{ fontSize: '120px' }} />
                  </span>
                </ButtonBase>
                {image.caption && <Caption blocks={image.caption} />}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div className={classes.paper}>
                    <GatsbyImage
                      image={imageData}
                      alt={image?.alt}
                      objectFit="contain"
                      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </Modal>
              </div>
              <div className={classes.titleItem}>
                <div className={classes.titleContainer}>
                  <div className={classes.nameItem}>
                    <Typography component={headingLevel} variant="h4">
                      {name}
                    </Typography>
                    <ProductCardRating rating={rating} />
                  </div>
                  <div className={classes.topButton}>
                    <ButtonAffiliate {...mapMuiBtnToProps(topBtn)} />
                  </div>
                </div>
              </div>
              <div className={classes.infoItem}>
                <ProductInfoList infoList={infoList} />
              </div>
            </div>
          </Box>
          {segments.map((segment) => {
            const { _type, _key } = segment;
            switch (_type) {
              case 'productCardFlexSegment':
                return <ProductCardFlexSegment key={_key} {...segment} />;
              case 'productCardDividerSegment':
                return <ProductCardDividerSegment key={_key} />;
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          })}
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
