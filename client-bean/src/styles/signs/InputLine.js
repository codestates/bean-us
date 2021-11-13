import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: ${({ checkId }) => (checkId === 'true' ? '170px' : '250px')};
  height: 30px;
`;

const CheckIdBtn = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 30px;
  font-size: 12px;
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
  width: ${({ signup }) => (signup === 'true' ? '100px' : '60px')};
  font-size: 16px;
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
  signup: 'false',
  checkId: 'false',
};
