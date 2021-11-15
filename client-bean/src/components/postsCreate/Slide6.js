import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question } from '../../styles/postspage/InputFrame';

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
  padding: 0;
  }
`;

export default function Slide6(props) {
  const {handleInputChange, slideScrollNext, slideScrollPost} = props;
  return(
    <Slide6Wrapper>
      <Question>6. 간단한 설명(필수)</Question>
      <textarea name='content' onChange={handleInputChange}></textarea>
      <button className="postBtn" onClick={() => slideScrollPost(4)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(5)}>
        <BsArrowDownCircle/>
      </button>
    </Slide6Wrapper>
  );
}