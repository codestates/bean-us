import React, {useState} from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { Question, Answer } from '../../styles/postspage/InputFrame';

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

const DropBox = styled.div`
  position: absolute;
  text-align: left;
  left: 10%;
  top: 48%;
  width: 80%;
  border-radius: 5px;
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 5px;
  justify-content: space-between;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  height: auto;
  display: ${({focus}) => (focus ? `grid` : `none`)};
  & div {
    text-align: center;
    padding: 5px;
    width: auto;
    background-color: rgba(121, 147, 105, 1);
    border-radius: 5px;
  }

  & div:hover {
    background-color: rgba(166,194,152,1);
    cursor: pointer;
  }
`;

export default function Slide3(props) {
  const {handleInputChange, handleClick, slideScrollNext, slideScrollPost, beans, value} = props;
  const [onInputFocus, setOnInputFocus] = useState(false);

  const inputFoucs = (e) => {
    setOnInputFocus(!onInputFocus);
  };

  return(
    <Slide3Wrapper>
      <Question>3. 원두 선택(필수)</Question>
      <Answer autoComplete='off' value={value} onFocus={inputFoucs} onChange={handleInputChange} name='bean' placeholder='원두를 선택해주세요.'></Answer>
      <DropBox focus={onInputFocus} >
        {beans.map((bean) => {
          return <div value={bean.beanName} id={bean.beanId} onClick={handleClick} key={bean.beanId}>{bean.beanId} : {bean.beanName} </div>
        })}
      </DropBox>
      <button className="postBtn" onClick={() => slideScrollPost(1)}>
        <BsArrowUpCircle/>
      </button>
      <button className="nextBtn" onClick={() => slideScrollNext(3)}>
        <BsArrowDownCircle/>
      </button>
    </Slide3Wrapper>
  );
}