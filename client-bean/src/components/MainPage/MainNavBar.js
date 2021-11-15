import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { MainHeader, Nav } from '../NavBar';

const MainHeaderNone = styled(MainHeader)`
  background-color: rgba(0, 0, 0, 0);
`;

const MainNav = styled(Nav)`
  position: absolute;
  background-color: none;
  > .link {
    color: #e67700;
    &:hover {
      background-color: grey;
    }
  }
`;

export default function Header() {
  return (
    <MainHeaderNone>
      <Link to='/' className='link'>
        <img src='/asset/mainpage/logo.png' alt='logo' />
      </Link>
      <MainNav>
        <Link to='/' className='link'>
          <MdHomeFilled className='navicon' />
        </Link>
        <Link to='/posts' className='link'>
          post
        </Link>
        <Link to='beans' className='link'>
          beans
        </Link>
        <Link to='myPage' className='link'>
          mypage
        </Link>
      </MainNav>
    </MainHeaderNone>
  );
}
