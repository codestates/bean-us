import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question, Answer } from '../../styles/postspage/InputFrame';

const Slide5Wrapper = styled.div`
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

export default function Slide5(props) {
  const {handleInputChange, slideScrollNext, slideScrollPost} = props;
  return(
    <Slide5Wrapper>
      <Question>5. 물 양(필수)</Question>
      <Answer onChange={handleInputChange} name='water' placeholder='ml단위로 입력해주세요.' type='number'></Answer>
      <button className="postBtn" onClick={() => slideScrollPost(3)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(5)}>
        <BsArrowDownCircle/>
      </button>
    </Slide5Wrapper>
  );
}