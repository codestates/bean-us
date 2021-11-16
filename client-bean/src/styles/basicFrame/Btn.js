import React from 'react';
import styled from 'styled-components';

export const Btn = styled.button`
  border: none;
  padding: 0.2rem 0.7rem;
  background-color: white;
  border-radius: 3px;
  margin-left: ${({ marginLeft }) => marginLeft || 0};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;

export default function BtnFrame({ content, marginLeft, clickEvent }) {
  return (
    <Btn marginLeft={marginLeft} onClick={clickEvent}>
      {content}
    </Btn>
  );
}
