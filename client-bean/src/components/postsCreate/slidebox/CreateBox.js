import React from 'react';
import styled from 'styled-components';
// import Answer from './Answer';
// import Question from './Question';

const QuestionBoxCtn = styled.div`
  background-color: white;
  width: 1099px;
  height: 80vh;
  margin: 0 auto;
  box-shadow: 10px 10px 6px 1px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputCtn = styled.div`
  flex: none;
  width: 800px;
  height: 500px;
  overflow: hidden;
`;

function CreateBox() {
  return(
    <QuestionBoxCtn>
      <InputCtn>
      </InputCtn>
    </QuestionBoxCtn>
  );
}

export default CreateBox;