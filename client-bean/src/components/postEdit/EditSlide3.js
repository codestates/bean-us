import React, {useState} from 'react';
import styled, {css} from 'styled-components';
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
`;

const DropBox = styled.div`
  position: absolute;
  text-align: left;
  left: 10%;
  top: 52%;
  width: 80%;
  height: 200px;
  border-radius: 5px;
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 5px;
  justify-content: space-between;
  font-size: 1rem;
  overflow: auto;
  /* background-color: rgba(255, 255, 255, 0.9); */
  box-shadow: 0px 10px 30px rgba(0,0,0,0.2);
  display: ${({focus}) => (focus ? `grid` : `none`)};
`;
const Bean = styled.div`
  text-align: center;
  padding: 10px;
  width: auto;
  border: 1px solid rgba(121, 147, 105, 1);
  border-radius: 25px;
  color: rgba(121, 147, 105, 1);
  font-family: 'Cafe24SsurroundAir';
  &:hover {
  background-color: rgba(166,194,152,1);
  cursor: pointer;
  color: white;
  }
  
  ${props => 
    props.click && 
    css`
      color: #fff;
      background-color: rgba(121, 147, 105, 1);
    `
  }
`;

export default function EditSlide3(props) {
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
          return <Bean value={bean.beanName} id={bean.beanId} onClick={handleClick} key={bean.beanId} click={bean.click}>#{bean.beanId} : {bean.beanName} </Bean>
        })}
      </DropBox>
      <div className="postBtn" onClick={() => slideScrollPost(1)}>
        <BsArrowUpCircle/>
      </div>
      <div className="nextBtn" onClick={() => slideScrollNext(3)}>
        <BsArrowDownCircle/>
      </div>
    </Slide3Wrapper>
  );
}