import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainHeader = styled.header`
  width: 100 vw;
  height: 10vh;
  background-color: #799369;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;
const Nav = styled.nav`
  width: 20vw;
  height: 10vh;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  justify-content: space-around;
  position: absolute;
  right: 0;
  margin-right: 1vw;
`;

const Header = (props) => {
  const logostyle = {
    width: '100px',
    marginTop: '2vh',
    marginLeft: '2vw',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
  };

  return (
    <MainHeader>
      <Link to="/">
        <img src="img/logo.png" alt="logo" style={logostyle} />
      </Link>
      <Nav>
        <Link to="/posts" style={linkStyle}>
          post
        </Link>
        <Link to="beans" style={linkStyle}>
          beans
        </Link>
        <Link to="myPage" style={linkStyle}>
          mypage
        </Link>
      </Nav>
    </MainHeader>
  );
};

export default Header;
