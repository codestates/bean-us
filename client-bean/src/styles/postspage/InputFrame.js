import React from 'react';
import styled from 'styled-components';

export const Question = styled.div`
  width: 210px;
  height: 60px;
  background-color: #d2dcc2;
  position: absolute;
  text-align: center;
  top: 15%;
  left: 0%;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 15px;
  border-radius: 5px;
  font-family: 'Cafe24Ohsquareair';
`;

export const Answer = styled.input`
  width: 400px;
  height: 60px;
  outline: none;
  background: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 40%;
  left: 24%;
  font-size: 1.3rem;
  padding: 0 15px;
  box-sizing: border-box;
  font-family: 'Cafe24SsurroundAir';
  &::placeholder {
    font-size: 1.2rem;
    text-align: center;
    font-family: 'Cafe24SsurroundAir';
  }
`;

export default function InputFrame() {
  return <div></div>;
}
