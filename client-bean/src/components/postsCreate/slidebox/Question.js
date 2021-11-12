import React from 'react';
import styled from 'styled-components';

const QuestionCtn = styled.div`
  width: 500px;
  height: 60px;
  margin: 0 auto;
  margin-top: 160px;
  font-size: 1.8rem;
  font-weight: bold;
  padding-top: 27px;
`;

function Question() {
  return(
    <QuestionCtn>
        1. 제목을 입력하세요
    </QuestionCtn>
  );
}

export default Question;