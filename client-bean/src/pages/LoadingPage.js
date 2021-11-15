import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 2.5rem;
  padding: 3rem;
  text-align: center;
`;

export default function LoadingPage(props) {
  return <Container>loading...</Container>;
}
