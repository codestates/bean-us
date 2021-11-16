import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';

import TopBar from './TopBar';

export const MainHeader = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #c8aa9b;
  z-index: 5;
  > .link {
    > img {
      width: 100px;
    }
  }
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.5vw;
  background-color: #fff;
  > .link {
    padding: 4px 0 8px;
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

const Img = styled.img``;

export default function NavBar({
  isLogin,
  loginHandler,
  modalHandler,
  saveLoginId,
  loginId,
  renderModal,
}) {
  return (
    <>
      <TopBar
        isLogin={isLogin}
        modalHandler={modalHandler}
        loginHandler={loginHandler}
        loginId={loginId}
        saveLoginId={saveLoginId}
        renderModal={renderModal}
      ></TopBar>
      <MainHeader>
        <Link to='/' className='link' absolute='absolute'>
          <Img src='/asset/mainpage/logo.png' alt='logo' />
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
          <Link to='myPage' className='link'>
            mypage
          </Link>
        </Nav>
      </MainHeader>
    </>
  );
}
