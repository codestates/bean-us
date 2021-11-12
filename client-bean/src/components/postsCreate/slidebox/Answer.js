import React from 'react';
import styled from 'styled-components';

const AnswerCnt = styled.div`
  width: 500px;
  height: 60px;
  margin: 0 auto;
  padding-top: 27px;
  /* border-bottom: 1px solid brown; */
  & input {
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 1px solid brown;
    font-size: 1.3rem;
    &:focus {
      outline: none;
    }
  }
`;

function Answer() {
  return(
    <AnswerCnt>
      <input placeholder="제목은 20글자 미만으로 입력해주세요"></input>
    </AnswerCnt>
  );
}

export default Answer;