import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
// import { score } from '../data';
const MainMenu = () => {
  return (
    <>
      <NavLink to="/game1">
        <Button text={'button 1'} />
      </NavLink>
      <NavLink to="/game2">
        <Button text={'button 2'} />
      </NavLink>
      <NavLink to="/game3">
        <Button text={'button 3'} />
      </NavLink>
    </>
  );
};

export default MainMenu;
