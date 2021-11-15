import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './InputLine';

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: RGB(249, 246, 245);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    font-weight: 700;
    background-color: rgba(160, 72, 6);
    color: #fff;
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
