import React from 'react';
import { Answer, Question } from '../../styles/postspage/InputFrame';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";

// 20글자 제한 경고메세지

const Slide1Wrapper = styled.div`
  width: 800px;
  height: 70vh;
  margin: 0 auto;
  position: relative;
  & .postBtn {
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 38%;
  left: 100%;
  font-size: 2rem;
  color: #a46565;
  }
  & .nextBtn {
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 48%;
  left: 100%;
  font-size: 2rem;
  color: #a46565;
  }
`;

const AlertMessage = styled.div`
  width: 400px;
  height: 30px;
  position: absolute;
  top: 49%;
  left: 24%;
  color: #bb5151;
`;


//title입력 슬라이드
function Slide1(props) {
  const {handleInputChange, slideScrollNext, slideScrollPost, inputs} = props;

  return(
    <Slide1Wrapper>
      <Question>1. 제목 입력(필수)</Question>
      <Answer placeholder='제목은 20글자 이하로 작성해주세요' onChange={handleInputChange} name='title'></Answer>
      {inputs.title.length > 20 ? <AlertMessage>제목은 20글자 이하여야 합니다</AlertMessage> : null}
      <button className='postBtn' onClick={() => slideScrollPost(0)}><BsArrowUpCircle/></button>
      <button className='nextBtn' onClick={() => slideScrollNext(1)}><BsArrowDownCircle /></button>
    </Slide1Wrapper>
  );
}

export default Slide1;