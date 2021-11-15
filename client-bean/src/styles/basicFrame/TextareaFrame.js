import styled from 'styled-components';

export const TextAreaFrame = styled.textarea`
  width: 100%;
  resize: none;
  background-color: transparent;
  border: none;
  border-radius: 5px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &:focus {
    outline: 0;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
