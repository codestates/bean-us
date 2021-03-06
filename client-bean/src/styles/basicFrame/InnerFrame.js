import styled from 'styled-components';

export const InnerFrame = styled.div`
  border: ${({ theme }) => theme.line.frame};
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1rem;

  & .subtitle {
    font-family: 'Cafe24Ohsquareair';
    padding-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: ${({ theme }) => theme.line.frame};
  }

  & .content {
    padding: 1rem;
    line-height: 1.8rem;
  }

  & .underSubTitle {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.8rem;
    font-family: 'Cafe24SsurroundAir';
  }
`;
