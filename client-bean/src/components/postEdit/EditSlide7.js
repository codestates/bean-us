import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question } from '../../styles/postspage/InputFrame';

const Slide7Wrapper = styled.div`
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
  & textarea {
  width: 500px;
  height: 200px;
  outline: none;
  border: 1px solid #a46565;
  border-radius: 2px;
  background: none;
  position: absolute;
  top: 40%;
  left: 18%;
  padding: 2;
  }
`;

export default function EditSlide7(props) {
  const {handleInputChange, slideScrollNext, slideScrollPost, postInfo} = props;
  return(
    <Slide7Wrapper>
      <Question>7. 간단한 설명(필수)</Question>
      <textarea defaultValue={postInfo.content} name='content' onChange={handleInputChange}></textarea>
      <button className="postBtn" onClick={() => slideScrollPost(5)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(6)}>
        <BsArrowDownCircle/>
      </button>
    </Slide7Wrapper>
  );
}