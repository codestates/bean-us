import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 21px;
  background-color: #c8aa9b;
`;
const LoginBtn = styled.button`
  width: 110px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;
const LogoutBtn = styled.button`
  width: 60px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

export default function MainTopBar({ isLogin, modalHandler }) {
  return (
    <TopBar>
      {isLogin ? (
        <LogoutBtn onClick={modalHandler}>로그아웃</LogoutBtn>
      ) : (
        <LoginBtn onClick={modalHandler}>로그인/회원가입</LoginBtn>
      )}
    </TopBar>
  );
}
