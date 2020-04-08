import React from 'react';
import styled from 'styled-components';

import iconWater from '!file-loader!../../../assets/images/icon-water.svg';
import iconInfo from '!file-loader!../../../assets/images/icon-info.svg';
import iconSubscribe from '!file-loader!../../../assets/images/icon-subscribe.svg';
import iconZoom from '!file-loader!../../../assets/images/icon-zoom.svg';

const IconWrapper = styled.div`
  height: auto;
  transform: translateY(-5px);
  min-width: 90px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${p => p.theme.screens.tablet}) {
    justify-content: flex-start;
    align-items: flex-end;
    height: 70px;
  }
`;

const StyledIcon = styled.img`
  width: 55px;
  height: 55px;
`;

const OverlayIcon = p => {
  const { icon } = p;

  const geticon = type => {
    switch (type) {
      case 'water':
        return iconInfo;
        break;
      case 'info':
        return iconInfo;
        break;
      case 'zoom':
        return iconZoom;
        break;
      case 'subscribe':
        return iconSubscribe;
        break;
      default:
        break;
    }
  }

  return (
    <IconWrapper>
      <StyledIcon src={geticon(icon)}/>
    </IconWrapper>
  );
}

export default OverlayIcon;