import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question } from '../../styles/postspage/InputFrame';

const Slide4Wrapper = styled.div`
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
  & .inputBox {
    position: absolute;
    top: 43%;
    left: 25%;
    width: 400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 80px);
    grid-gap: 5px;
    justify-content: space-between;
  }
  & input {
    width: 100px;
    height: 40px;
    outline: none;
  }
`;

export default function EditSlide4(props) {
  const {handleInputChange, slideScrollNext, slideScrollPost, value} = props;
  return(
    <Slide4Wrapper>
      <Question>4. 원두 비율(필수)</Question>
      <div className='inputBox'>
      {value.map((el, index) => (
        <input key={index} onChange={handleInputChange} name='rate' bean={index} type='number' placeholder={el + 'g'} max='1000'></input>
      ))}
      </div>
      <button className="postBtn" onClick={() => slideScrollPost(2)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(4)}>
        <BsArrowDownCircle/>
      </button>
    </Slide4Wrapper>
  );
}