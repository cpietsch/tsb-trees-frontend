import React from 'react';
import styled from 'styled-components';

import DeckGlMap from '../map';
import Sidebar from '../Sidebar';
import Nav from '../Nav';
import Legend from '../Legend';
import Cookie from '../Cookie';
import Loading from '../Loading';
import Overlay from '../Overlay';
import Credits from '../Credits';

import { removeOverlay } from '../../utils';

const AppWrapperDiv = styled.div`
  font-family: ${props => props.theme.fontFamily};
  height: 100vh;
  width: 100vw;
`;

const CreditsContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (max-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
  }
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: calc(100vw - 24px);
  height: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: end;
`;

const CookieContainer = styled.div`
  display: block;
`;

const AppWrapper = p => {
  const { isLoading, data, overlay } = p;

  removeOverlay();

  return (
    <AppWrapperDiv>
      {isLoading && <Loading />}
      {!isLoading && data && <DeckGlMap data={data} />}
      {!isLoading && data && <Sidebar />}
      {overlay && data && <Overlay />}
      <Nav />
      <CreditsContainer>
        <Credits />
      </CreditsContainer>
      <BottomContainer>
        <CookieContainer>
          <Cookie />
        </CookieContainer>
        <Legend />
      </BottomContainer>
    </AppWrapperDiv>
  );
};

export default AppWrapper;
