import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';
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
  & textarea {
    width: 500px;
    height: 200px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background: none;
    position: absolute;
    top: 40%;
    left: 18%;
    padding: 15px;
    font-size: 1.2rem;
    font-family: 'BMHANNAAir';
  }
  & .alert-message {
    width: 250px;
    height: 20px;
    color: #977171;
    position: absolute;
    top: 86%;
    left: 36%;
  }
`;

export default function Slide7(props) {
  const { handleInputChange, slideScrollNext, slideScrollPost, inputs, value } = props;
  return (
    <Slide7Wrapper>
      <Question>7. 간단한 설명(필수)</Question>
      <textarea name='content' onChange={handleInputChange}></textarea>
      <div className='postBtn' onClick={() => slideScrollPost(5)}>
        <BsArrowUpCircle />
      </div>
      <div className='nextBtn' onClick={() => slideScrollNext(6)}>
        <BsArrowDownCircle />
      </div>
      {inputs.title &&
      inputs.beanList.length === value.length &&
      inputs.water &&
      inputs.waterTemp &&
      inputs.content ? null : (
        <div className='alert-message'>필수항목이 입력되지 않았습니다.</div>
      )}
    </Slide7Wrapper>
  );
}
