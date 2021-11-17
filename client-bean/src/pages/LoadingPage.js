import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: ${({ width }) => width || '400px'};
  padding: ${({ padding }) => padding || '5rem'};
`;

const LoadingWrap = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid ${({ theme }) => theme.color.darkGreen};
  animation: spin 2s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.div`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  padding: 3rem;
  text-align: center;
  font-family: 'Cafe24Ohsquareair';
`;

export default function LoadingPage({ content, spinner, width, fontSize, padding }) {
  return (
    <Container width={width} padding={padding}>
      {spinner && <LoadingWrap />}
      <Loading fontSize={fontSize}>{content}</Loading>
    </Container>
  );
}
