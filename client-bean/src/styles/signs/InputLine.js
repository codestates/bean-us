import React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
  width: ${({ checkId }) => (checkId ? '160px' : '250px')};
  height: 35px;
  ${({ type }) =>
    type === 'text' &&
    css`
      font-size: 16px;
      font-family: 'Cafe24Simplehae';
    `}
  border: none;
  padding: 0 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.8);
  }
`;

const CheckIdBtn = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 10px;
  font-family: 'BMHANNAAir';
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }
  &:active {
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.4);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || '15px'};
`;

const P = styled.p`
  margin-right: 15px;
  width: ${({ signup }) => (signup ? '100px' : '60px')};
  font-family: 'BMHANNAAir';
`;

export default function InputLine({
  title,
  type,
  marginTop,
  name,
  inputHandler,
  checkId,
  signup,
  checkDuplicate,
  blurHandler,
}) {
  return (
    <Wrapper marginTop={marginTop}>
      <P signup={signup}>{title}</P>
      <Input
        name={name}
        type={type}
        defaultValue=''
        onChange={inputHandler}
        checkId={checkId}
        onBlur={blurHandler}
      ></Input>
      {checkId ? <CheckIdBtn onClick={checkDuplicate}>중복 확인</CheckIdBtn> : null}
    </Wrapper>
  );
}

Input.defaultProps = {
  type: 'text',
};
