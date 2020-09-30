import React, { useState } from 'react';
import styled from 'styled-components';

import { getColorWithAlpha } from '../../utils/colors';

const Main = styled.div`
  height: 100%;
  width: 100%;
  
  &.open {
    height: 100vh;
    background-color: ${({ theme }) => getColorWithAlpha(theme.colors.black, 0.6)};
  }
`;

const Menu = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateX(-100vw);
  transition: transform 0.5s ease-in;

  &.open {
    transform: translateX(0);
  }
`;

const HamburgerIcon = styled.div`
  height: 40px;
  width: 30px;
  position: absolute;
  z-index: 1;
  right: calc(100% - 30px);
  top: 10px;
  transition: right 0.3s ease-in;
  transition-delay: 0.25s;

  &.open {
    right: 21%;
  }
  
  span {
    transform: rotate(0deg);
    position: absolute;
    display: block;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.black};
    height: 4px;
    width: 100%;
    transition: .25s ease-in-out;
    transition-delay: 0.4s;
    opacity: 1;
    left: 0;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2), span:nth-child(3) {
    top: 10px;
  }

  span:nth-child(4) {
    top: 20px;
  }

  &.open span:nth-child(1) {
    top: 10px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;


const HamburgerMenu: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Main className={open ? 'open' : ''}>
      <HamburgerIcon id="nav-icon3" className={open ? 'open' : ''} onClick={() => setOpen(open => !open)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <Menu className={open ? 'open' : ''}>
      </Menu>
    </Main>
  )
}

export default HamburgerMenu;