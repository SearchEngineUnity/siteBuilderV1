import React from 'react';
import ButtonAffiliate from './ButtonAffiliate';
import ButtonExternal from './ButtonExternal';
import ButtonInternalGlobal from './ButtonInternalGlobal';
import ButtonInternalLocal from './ButtonInternalLocal';
import ButtonJumpLink from './ButtonJumpLink';
import { mapMuiBtnToProps } from '../../lib/mapToProps';

const ConditionalButton = ({ condition, values }) => {
  switch (condition) {
    case 'jumpLink':
      return <ButtonJumpLink {...mapMuiBtnToProps(values)} />;
    case 'affiliateLink':
      return <ButtonAffiliate {...mapMuiBtnToProps(values)} />;
    case 'externalLink':
      return <ButtonExternal {...mapMuiBtnToProps(values)} />;
    case 'internalGlobal':
      return <ButtonInternalGlobal {...mapMuiBtnToProps(values)} />;
    case 'internalLocal':
      return <ButtonInternalLocal {...mapMuiBtnToProps(values)} />;
    default:
      return <div>button type does not exist</div>;
  }
};

export default ConditionalButton;
