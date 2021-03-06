import React from 'react';

import SideBar from '../components/MainPage/SideBar';
import Section1 from '../components/MainPage/Section/Section1';
import Section2 from '../components/MainPage/Section/Section2';
import Section3 from '../components/MainPage/Section/Section3';
import styled from 'styled-components';
import Footer from '../components/MainPage/Footer/Footer';
import useScroll from '../components/MainPage/useScroll';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  overflow-y: auto;
`;

export default function Main({ isLogin, loginHandler, loginId, saveLoginId, modalHandler }) {
  const { scrollY } = useScroll();

  return (
    <MainContainer>
      <SideBar scrollY={scrollY} />
      <Section1
        scrollY={scrollY}
        isLogin={isLogin}
        modalHandler={modalHandler}
        loginHandler={loginHandler}
        saveLoginId={saveLoginId}
        loginId={loginId}
      />
      <Section2 scrollY={scrollY} />
      <Section3 scrollY={scrollY} />
      <Footer />
    </MainContainer>
  );
}
