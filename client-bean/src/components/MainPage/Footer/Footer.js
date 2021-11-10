import React from 'react';
import styled from 'styled-components';

const MainFooter = styled.footer`
    width: 100vw;
    height: 30vh;
    background-color: rgba(0,0,0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterLogo = styled.div`
  > img {
    width: 200px;
  }
`;

const ServiceDesc = styled.div`

`;

const Contact = styled.div`

`;




const Footer = () => {

    return (
    <MainFooter>
        <ServiceDesc>asf</ServiceDesc>
        <FooterLogo>
          <img src="img/logowhite.png" alt="logo"/>
        </FooterLogo>
        <Contact>sdg</Contact>
    </MainFooter>);

}

export default Footer;  
