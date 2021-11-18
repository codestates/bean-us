import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question } from '../../styles/postspage/InputFrame';

const Slide2Wrapper = styled.div`
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
  color: rgba(121, 147, 105, 1);
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
  color: rgba(121, 147, 105, 1);
  }
  & input {
  width: 400px;
  height: 60px;
  outline: none;
  background: none;
  border: none;
  position: absolute;
  top: 40%;
  left: 24%;
  font-size: 1.3rem;
  padding: 0;
  font-family: 'Cafe24SsurroundAir';
  }
`;

function EditSlide2(props) {
  const { handleInputChange,slideScrollNext, slideScrollPost} = props;
  return(
    <Slide2Wrapper>
      <Question>2. 사진 업로드(선택)</Question>
      <form>
      <input name='imgFile' type='file' accept='image/*' onChange={handleInputChange}></input>
      </form>
      <div className="postBtn" onClick={() => slideScrollPost(0)}>
        <BsArrowUpCircle/>
      </div>
      <div className="nextBtn" onClick={() => slideScrollNext(2)}>
        <BsArrowDownCircle/>
      </div>
    </Slide2Wrapper>
  );
}

export default EditSlide2;