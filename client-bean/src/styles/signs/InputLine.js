import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  height: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: 15px;
`;

const P = styled.p`
  margin-right: 15px;
  width: 60px;
`;

export default function InputLine({ title, type, marginTop, name, inputHandler }) {
  return (
    <Wrapper marginTop={marginTop}>
      <P>{title}</P>
      <Input name={name} type={type} onChange={inputHandler}></Input>
    </Wrapper>
  );
}
