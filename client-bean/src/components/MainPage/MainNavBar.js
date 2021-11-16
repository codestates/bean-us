import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { MainHeader, Nav } from '../NavBar';
import TopBar from '../TopBar';

const MainHeaderNone = styled(MainHeader)`
  background-color: rgba(0, 0, 0, 0);
`;

const MainNav = styled(Nav)`
  background-color: grey;
  > .link {
    color: #e67700;
    &:hover {
      background-color: grey;
    }
  }
`;

const Img = styled.img``;

export default function MainNavBar({
  isLogin,
  loginHandler,
  modalHandler,
  saveLoginId,
  loginId,
  renderModal,
  main,
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
        main={main}
      ></TopBar>
      <MainHeaderNone>
        <Link to='/' className='link'>
          <Img src='/asset/mainpage/logo.png' alt='logo' />
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
    </>
  );
}
