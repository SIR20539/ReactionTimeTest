import React from 'react';

import Button from './Button';
import styled from 'styled-components';

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
`;
const divStyle = {
  backgroundColor: 'gray',
  height: '100vh',
  width: '100vw',
};

const MainMenu = () => {
  return (
    <div style={divStyle}>
      <NavWrap>
        <Button text={'button 1'} link="/game1" />
        <Button text={'button 2'} link="/game2" />
        <Button text={'button 3'} link="/game3" />
      </NavWrap>
    </div>
  );
};

export default MainMenu;
