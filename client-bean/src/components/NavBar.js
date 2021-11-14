import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';

const MainHeader = styled.header`
  width: 100vw;
  height: 7vh;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #c8aa9b;
  z-index: 5;
  > .link {
    > img {
      width: 100px;
      margin-left: 2vw;
    }
  }
`;
const Nav = styled.nav`
  width: 20vw;
  height: 10vh;
  display: flex;
  font-size: 1.2rem;
  justify-content: space-around;
  position: absolute;
  right: 0;
  margin-right: 3.3vw;
  > .link {
    height: 30px;
    width: 90px;
    flex: none;
    text-decoration: none;
    color: black;
    font-weight: 500;
    box-sizing: border-box;
    text-align: center;
    &:hover {
      background-color: #877158;
      color: white;
    }
    .navicon {
      vertical-align: bottom;
    }
  }
`;

export default function Header() {
  return (
    <MainHeader>
      <Link to='/' className='link'>
        <img src='/asset/mainpage/logo.png' alt='logo' />
      </Link>
      <Nav>
        <Link to='/' className='link'>
          <MdHomeFilled className='navicon' />
        </Link>
        <Link to='/posts' className='link'>
          post
        </Link>
        <Link to='beans' className='link'>
          beans
        </Link>
        <Link to='my-page' className='link'>
          mypage
        </Link>
      </Nav>
    </MainHeader>
  );
}
