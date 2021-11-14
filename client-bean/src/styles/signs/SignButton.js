import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './InputLine';

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-left: ${({ marginLeft }) => marginLeft};

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.4);
  }
`;

export default function SignButton({
  leftBtn,
  rightBtn,
  leftBtnHandler,
  rightBtnHandler,
  marginTop,
  marginBottom,
  marginLeft,
}) {
  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom} marginLeft={marginLeft}>
      <Button onClick={leftBtnHandler}>{leftBtn}</Button>
      <Button marginLeft='25px' onClick={rightBtnHandler}>
        {rightBtn}
      </Button>
    </Wrapper>
  );
}
