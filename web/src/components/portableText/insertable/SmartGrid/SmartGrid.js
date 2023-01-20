import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCardGridPtTile from './ProductCardGridPtTile';
import PtTile from '../../serializer/SmartGridSerializer';
import Illustration from '../Illustration';
import SmartUnorderedList from '../SmartUnorderedList';
import SmartOrderedList from '../SmartOrderedList';
import VideoEmbed from '../VideoEmbed';
import ButtonJumpLink from '../../../buttons/ButtonJumpLink';
import ButtonAffiliate from '../../../buttons/ButtonAffiliate';
import ButtonExternal from '../../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../../buttons/ButtonInternalLocal';
import ClickableImage from '../ClickableImage';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';

function SmartGrid({ layout, tiles }) {
  // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      lg: 12 / valueArrNum[0],
      md: 12 / valueArrNum[1],
      sm: 12 / valueArrNum[2],
      xs: 12 / valueArrNum[3],
    };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <Grid container spacing={3}>
      {tiles &&
        tiles.map((tile) => {
          const { _key, _type } = tile;

          const tileSelector = (key) => {
            switch (true) {
              case key === 'productCardGridPtTile':
                return <ProductCardGridPtTile {...tile} />;
              case key === 'smartGridPtTile':
                return <PtTile blocks={tile.content} />;
              case key === 'illustration':
                return <Illustration illustration={tile} />;
              case key === 'smartOrderedList':
                return <SmartOrderedList {...tile} />;
              case key === 'smartUnorderedList':
                return <SmartUnorderedList {...tile} />;
              case key === 'clickableImage':
                return <ClickableImage {...tile} />;
              case key === 'videoEmbed':
                return <VideoEmbed {...tile} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'jumpLink':
                return <ButtonJumpLink {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'affiliateLink':
                return <ButtonAffiliate {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'externalLink':
                return <ButtonExternal {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'internalGlobal':
                return <ButtonInternalGlobal {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'internalLocal':
                return <ButtonInternalLocal {...mapMuiBtnToProps(tile)} />;
              default:
                return <div> Tile still under development</div>;
            }
          };

          return (
            <Grid item key={_key} {...col}>
              {tileSelector(_type)}
            </Grid>
          );
        })}
    </Grid>
  );
}

export default SmartGrid;
