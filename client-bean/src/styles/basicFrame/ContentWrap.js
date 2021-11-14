import styled from 'styled-components';

export const ContentWrap = styled.div`
  background-color: ${({ theme }) => theme.color.lightWhite};
  border-radius: 5px;
  padding: ${({ padding }) => padding || '30px'};
  margin: 5px 0;
`;
