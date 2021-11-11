import React from 'react';
import styled from 'styled-components';

const MainSection3 = styled.footer`
    width: 100vw;
    height: 100vh;
    background-color: #eae7dd;
`;
const Map = styled.div`
    width: 50vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const Footer = () => {

    return (
    <MainSection3>
        <Map><img src="img/world-map.png" alt="world-map"/></Map>
    </MainSection3>);

}

export default Footer;  
