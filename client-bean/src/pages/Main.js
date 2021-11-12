// eslint-disable no-unused-vars

import React from 'react';
// import {useLocation} from 'react-router-dom';
import SideBar from '../components/MainPage/SideBar';
import Section1 from '../components/MainPage/Section/Section1';
import Section2 from '../components/MainPage/Section/Section2';
import Section3 from '../components/MainPage/Section/Section3';
import styled from 'styled-components';
import Footer from '../components/MainPage/Footer/Footer';
import useScroll from '../components/MainPage/useScroll';
import SignModal from '../components/signModal/SignModal';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export default function Main({ isLogin, loginHandler, renderModal, modalHandler }) {
  const {scrollY} = useScroll();
  return (
    <MainContainer>
        <SideBar scrollY={scrollY} />
        <Section1 scrollY={scrollY} isLogin={isLogin} modalHandler={modalHandler}/>
        <Section2 scrollY={scrollY}/>
        <Section3 scrollY={scrollY}/>
        <Footer />
        {renderModal ? (
          <SignModal isLogin={isLogin} loginHandler={loginHandler} modalHandler={modalHandler} />
        ) : null}
    </MainContainer>
  );
}
