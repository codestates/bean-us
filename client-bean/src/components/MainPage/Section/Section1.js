import React from 'react';
import styled, {keyframes} from 'styled-components';
import backgroundimg from '../../../backgroundimg.jpg';
import MainNavBar from '../MainNavBar';
// import TopBar from '../../TopBar';

const beanRotation = keyframes`
  from {
    transform: rotate(0deg);
  } 30% {
    transform: rotate(45deg);
  } 70% {
    transform : rotate(-45deg);
  } 100% {
    transform: rotate(0deg);
  }
`;

const MainSection1 = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundimg});
  min-height: 100%;
  background-size: cover;
  background-attachment: fixed;
`;

const SectionIntroCnt = styled.div`
  width: 1024px;
  height: 90vh;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > span {
    font-size: 1.5rem;
  }
  > .introMain {
    font-size: 5rem;
    margin-bottom: 20px;
  }
  > .logoimg {
    width: 300px;
    margin-top: 20px;
  }
  > .beanimg {
    width: 200px;
    animation: ${beanRotation} 8s Linear infinite ;
  }
`;

export default function Section1({ isLogin, loginHandler, modalHandler, loginId, saveLoginId }) {
  return (
    <MainSection1>
      <MainNavBar
        isLogin={isLogin}
        loginHandler={loginHandler}
        loginId={loginId}
        saveLoginId={saveLoginId}
        modalHandler={modalHandler}
      />
      <SectionIntroCnt>
        <img src='asset/mainpage/logowhite.png' alt='' className='logoimg' />
        <img src='asset/mainpage/coffeebeans.png' alt='' className='beanimg' />
        <span className='introMain'>Special coffee beans</span>
        <span>In our website you can find sepecial flavor coffee beans,</span>
        <span>and you can share your own recipe with other people!</span>
      </SectionIntroCnt>
    </MainSection1>
  );
}
