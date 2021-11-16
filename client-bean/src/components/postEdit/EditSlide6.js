import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question, Answer } from '../../styles/postspage/InputFrame';

const Slide6Wrapper = styled.div`
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

export default function EditSlide6(props) {
  const {handleInputChange, slideScrollNext, slideScrollPost, postInfo} = props;
  return(
    <Slide6Wrapper>
      <Question>6. 물 온도(필수)</Question>
      <Answer defaultValue={postInfo.waterTemp} onChange={handleInputChange} name='waterTemp' placeholder='적정 물온도를 입력해주세요.' type='number' max='500'></Answer>
      <button className="postBtn" onClick={() => slideScrollPost(4)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(6)}>
        <BsArrowDownCircle/>
      </button>
    </Slide6Wrapper>
  );
}