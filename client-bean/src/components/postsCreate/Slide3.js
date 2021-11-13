import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question } from '../../styles/postspage/InputFrame';

const Slide3Wrapper = styled.div`
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

export default function Slide3(props) {
  const {slideScrollNext, slideScrollPost} = props;
  return(
    <Slide3Wrapper>
      <Question>3. 원두 선택(필수)</Question>
      <button className="postBtn" onClick={() => slideScrollPost(1)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(3)}>
        <BsArrowDownCircle/>
      </button>
    </Slide3Wrapper>
  );
}