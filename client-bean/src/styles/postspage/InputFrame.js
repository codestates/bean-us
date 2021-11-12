import React from 'react';
import styled from 'styled-components';

export const Question = styled.div`
  width: 400px;
  height: 80px;
  /* background: green; */
  position: absolute;
  top: 27%;
  left: 24%;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 20px;
`;

export const Answer = styled.input`
  width: 400px;
  height: 60px;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid brown;
  position: absolute;
  top: 36%;
  left: 24%;
  font-size: 1.3rem;
  padding: 0;
  &::placeholder {
    font-size: 1.2rem;
  }
`;



export default function InputFrame() {
  return(
    <div>
        
    </div>
  );
}
