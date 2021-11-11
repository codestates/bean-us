import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MainFooter = styled.footer`
    width: 100vw;
    height: 30vh;
    background-color: rgba(0,0,0, 0.8);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const FooterLogo = styled.div`
  > img {
    width: 200px;
  }
`;

const ServiceDesc = styled.ul`
`;

const Contact = styled.div`

`;




const Footer = () => {

    return (
    <MainFooter>
        <ServiceDesc>
          <div>
            <Link to='posts' className="footer-link">posts</Link>
          </div>
          <div>
            <Link to='beans' className="footer-link">beans</Link>
          </div>
          <div>
            <Link to='mypage' className="footer-link">mypage</Link>
          </div>
        </ServiceDesc>
        <FooterLogo>
          <img src="asset/mainpage/logowhite.png" alt="logo"/>
        </FooterLogo>
        <Contact>
          <ul>
            <li><a href="https://github.com/Je-chan">박예찬: Je-chan</a></li>
            <li><a href="https://github.com/song-code21">송하경: song-code21</a></li>
            <li><a href="https://github.com/lim1313">임예지: lim1313</a></li>
            <li><a href="https://github.com/jortier">최재원: Jortier</a></li>
          </ul>
        </Contact>
    </MainFooter>);

}

export default Footer;  
