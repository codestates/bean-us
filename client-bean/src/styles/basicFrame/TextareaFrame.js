import styled from 'styled-components';

export const TextAreaFrame = styled.textarea`
  width: 100%;
  resize: none;
  background-color: transparent;
  border: none;
  border-radius: 5px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: 0;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
