import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: calc(1em + 1vw);
  box-shadow: 4px 4px 0 0 gray;
  border: none;
  transform: rotate(-2deg);
`;

const Button = (props) => {
  return (
    <>
      <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    </>
  );
};

export default Button;
