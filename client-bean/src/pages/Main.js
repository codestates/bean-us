import React from 'react';
// import {useLocation} from 'react-router-dom';
import Section1 from '../components/MainPage/Section/Section1';
import Section2 from '../components/MainPage/Section/Section2';
import Section3 from '../components/MainPage/Section/Section3';
import styled from 'styled-components';
import Footer from '../components/MainPage/Footer/Footer';
import SignModal from '../components/signModal/SignModal';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export default function Main({ isLogin, loginHandler, renderModal, modalHandler }) {
  return (
    <MainContainer>
      <Section1 isLogin={isLogin} modalHandler={modalHandler} />
      <Section2 />
      <Section3 />
      <Footer />
      {renderModal ? (
        <SignModal isLogin={isLogin} loginHandler={loginHandler} modalHandler={modalHandler} />
      ) : null}
    </MainContainer>
  );
}
