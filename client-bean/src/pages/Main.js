import React from 'react';
import Section1 from '../components/MainPage/Section/Section1';
import Section2 from '../components/MainPage/Section/Section2';
import styled from 'styled-components';
import Footer from '../components/MainPage/Footer/Footer';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = (props) => {

    return (
        <MainContainer>
            <Section1 />
            <Section2 />
            <Footer />
        </MainContainer>
    )

}

export default Main;
