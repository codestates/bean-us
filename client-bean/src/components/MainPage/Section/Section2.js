import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const descTrasnform = keyframes`
  from {
    opacity: 0;
  } to {
    transform: translate(-30%);
    opacity: 1;
  }
`;

const imgTransform = keyframes`
  from {
    opacity: 0;
  } to {
    transform : translate(30%);
    opacity: 1;
  }
`;

const descTransformUP = keyframes`
  from {
    opacity: 1;
    transform: translate(-30%);
    } to {
      transform : translate(20%);
      opacity: 0;
    }
`;

const imgTransformUP = keyframes`
  from {
    opacity: 1;
    transform: translate(30%);
  } to {
    transform : translate(-20%);
    opacity: 0;
  }
`;

const MainSection2 = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const DescContainer = styled.div`
  width: 1024px;
  height: 90vh;
  margin: 0 auto;
  margin-top: 35px;
`;
const ImgContainer = styled.div`
  width: 260px;
  position: absolute;
  top: 30%;
  opacity: 0;
  ${(props) =>
    props.scrollY > 375 &&
    css`
      animation: ${imgTransform} 2s;
      animation-fill-mode: forwards;
      transition: all 0s linear;
    `};
  ${(props) =>
    props.scrollY <= 375 &&
    css`
      animation: ${imgTransformUP} 2s;
      transition: all 0s linear;
      animation-fill-mode: forwards;
    `}
`;
const Description = styled.div`
  opacity: 0;
  position: absolute;
  left: 50%;
  flex: none;
  width: 30vw;
  height: 90vh;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.scrollY > 375 &&
    css`
      animation: ${descTrasnform} 2s;
      animation-fill-mode: forwards;
      transition: all 0.6s linear;
    `};
  ${(props) =>
    props.scrollY < 430 &&
    css`
      animation: ${descTransformUP} 2s;
      transition: all 0.6s linear;
    `}
  > p {
    flex: none;
    width: 470px;
    font-weight: 600;
    font-size: 1.4rem;
    padding: 20px;
    line-height: 2rem;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    font-family: 'Cafe24SsurroundAir';
  }
  > ul {
    width: 470px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    flex: none;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    > li {
      flex: none;
      display: flex;
      margin-bottom: 20px;
      list-style: none;
      > .coffee-icon {
        max-width: 80px;
        max-height: 80px;
        margin-left: 10px;
        margin-right: 3px;
      }
      > p {
        flex: none;
        padding-left: 10px;
        font-family: 'Cafe24SsurroundAir';
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 1.2rem;
        > span {
          font-size: 1.4rem;
          font-weight: 600;
          color: #94673f;
        }
      }
    }
  }
`;
const DescTitle = styled.div`
  width: 300px;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #65452a;
  color: #65452a;
  margin-left: 20px;
  font-family: 'Cafe24Ohsquareair';
`;

export default function Section2(props) {
  const scrollY = props.scrollY;
  //375
  return (
    <MainSection2>
      <DescContainer>
        <ImgContainer scrollY={scrollY} r>
          <img src='asset/mainpage/coffeebeanimg.png' alt='coffee' />
        </ImgContainer>
        <Description scrollY={scrollY}>
          <DescTitle>About Bean-us</DescTitle>
          <p>
            Bean-us??? ????????? ?????? ????????? ????????????
            <br />
            ????????? ?????? ???????????? ???????????????! <br />
            ????????? ?????? ????????? ?????? ???????????? ????????????
            <br />
            ????????? ????????? ??????????????????
          </p>
          <ul>
            <li></li>
            <li>
              <img src='asset/mainpage/coffee.png' alt='coffee-icon' className='coffee-icon' />
              <p>
                <span>Share your recipe</span>
                <br />
                ?????? ??? ????????? ??????????????????! <br />
                ???????????? ????????? ??? <br />
                ?????? ??? ?????? ????????? ???????????????.
              </p>
            </li>
            <li>
              <img src='asset/mainpage/coffee-mug.png' alt='coffee-icon' className='coffee-icon' />
              <p>
                <span>Find sepcial coffee beans</span>
                <br />
                ?????? ?????? ?????? ?????????????
                <br />
                ???????????? ???????????? ????????? <br />
                ????????? ?????? ????????? ????????? ??????????????????!
              </p>
            </li>
            <li>
              <img
                src='asset/mainpage/coffee-machine.png'
                alt='coffee-icon'
                className='coffee-icon'
              />
              <p>
                <span>Comment your opinion</span>
                <br />
                ??? ????????? ?????? ????????????, <br />
                ???????????? ?????? ???????????? ???????????????????
              </p>
            </li>
          </ul>
        </Description>
      </DescContainer>
    </MainSection2>
  );
}
