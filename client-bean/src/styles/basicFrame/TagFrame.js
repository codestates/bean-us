import styled from 'styled-components';

export const TagFrame = styled.span`
  display: inline-block;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  border-radius: 25px;
  background-color: ${({ color }) => color || 'white'};
`;
