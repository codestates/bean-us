import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 21px;
`;
const LoginBtn = styled.button`
  width: 50px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;
const SignUpBtn = styled.button`
  width: 60px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;
const LogoutBtn = styled.button`
  width: 50px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
`;

const MainTopBar = (props) => {
  return (
    <TopBar>
      <LoginBtn>로그인</LoginBtn>
      <SignUpBtn>회원가입</SignUpBtn>
      <LogoutBtn>로그아웃</LogoutBtn>
    </TopBar>
  )
}

export default MainTopBar;
