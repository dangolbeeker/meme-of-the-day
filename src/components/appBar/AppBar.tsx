import React from 'react';
import styled from 'styled-components';

import HamburgerMenu from './HamburgerMenu';

const Main = styled.div`
  width: 100%;
  height: 80px;
`;

const AppBar: React.FC<{}> = () => {
  return <Main>
    <HamburgerMenu />
  </Main>;
}

export default AppBar;