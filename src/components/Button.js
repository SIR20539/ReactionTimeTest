import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: calc(1.5em + 1vw);
  box-shadow: 4px 4px 0 0 gray;
  border: none;
  transform: rotate(-2deg);
  margin: 2vh;
  border-radius: 5px;
`;

const Button = (props) => {
  return (
    <>
      {props.link ? (
        <NavLink to={props.link}>
          <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
        </NavLink>
      ) : (
        <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
      )}
    </>
  );
};

export default Button;
