import React, { useEffect } from 'react';
import styled from 'styled-components';

import { checkToken } from '../network/sign/checkToken';

const TopBarDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 21px;
  background-color: ${({ main }) => (main === 'main' ? 'none' : '#c8aa9b')};
`;
const LoginBtn = styled.button`
  width: 110px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: ${({ main }) => (main === 'main' ? '#fff' : '#000')};
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
  color: ${({ main }) => (main === 'main' ? '#fff' : '#000')};
  &:hover {
    cursor: pointer;
  }
`;

export default function TopBar({ isLogin, modalHandler, loginHandler, main }) {
  useEffect(() => {
    checkToken().then((res) => {
      loginHandler(res.data.data);
    });
  });
  return (
    <TopBarDiv main={main}>
      {isLogin ? (
        <LogoutBtn main={main} onClick={modalHandler}>
          로그아웃
        </LogoutBtn>
      ) : (
        <LoginBtn main={main} onClick={modalHandler}>
          로그인/회원가입
        </LoginBtn>
      )}
    </TopBarDiv>
  );
}
