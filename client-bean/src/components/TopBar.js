import React from 'react';
import styled from 'styled-components';

// import { checkToken } from '../network/sign/checkToken';

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* padding: 4px 21px 0 0; */
  background-color: ${({ main }) => (main ? 'orange' : '#c8aa9b')};
`;
const LoginBtn = styled.button`
  width: 110px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  color: ${({ main }) => (main ? '#fff' : '#000')};
  color: ${({ renderModal }) => renderModal && '#fff'};
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;
const LogoutBtn = styled.button`
  width: 60px;
  height: 20px;
  background: none;
  font-weight: 500;
  padding: 4px;
  border: none;
  cursor: pointer;
  z-index: 10;
  color: ${({ main }) => (main ? '#fff' : '#000')};
  color: ${({ renderModal }) => renderModal && '#fff'};
  &:hover {
    cursor: pointer;
  }
`;

const Greeting = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  padding: 0 10px 0 0;
  color: ${({ main }) => (main ? '#fff' : '#000')};
  color: ${({ renderModal }) => renderModal && '#fff'};
`;

export default function TopBar({ isLogin, modalHandler, loginId, renderModal, main }) {
  return (
    <TopBarDiv main={main}>
      {isLogin ? (
        <>
          <Greeting main={main} renderModal={renderModal}>
            {loginId}님 반가워요!
          </Greeting>
          <LogoutBtn main={main} renderModal={renderModal} onClick={modalHandler}>
            로그아웃
          </LogoutBtn>
        </>
      ) : (
        <LoginBtn main={main} onClick={modalHandler} renderModal={renderModal}>
          로그인/회원가입
        </LoginBtn>
      )}
    </TopBarDiv>
  );
}
