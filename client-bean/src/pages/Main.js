import React from 'react';
// import {useLocation} from 'react-router-dom';
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
`;

export default function Main () {
  const {scrollY} = useScroll();
  return (
    <MainContainer>
        <Section1 scrollY={scrollY}/>
        <Section2 scrollY={scrollY}/>
        <Section3 scrollY={scrollY}/>
        <Footer />
    </MainContainer>
  )
}

