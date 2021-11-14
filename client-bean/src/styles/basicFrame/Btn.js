import React from 'react';
import styled from 'styled-components';

export const Btn = styled.button`
  border: none;
  padding: 0.4rem 0.7rem;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

export default function BtnFrame({ content }) {
  return <Btn>{content}</Btn>;
}
