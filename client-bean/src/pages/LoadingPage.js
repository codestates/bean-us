import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 2.5rem;
  font-family: 'Cafe24Ohsquareair';
  padding: 3rem;
  text-align: center;
`;

export default function LoadingPage({ content }) {
  return <Container>{content}</Container>;
}
