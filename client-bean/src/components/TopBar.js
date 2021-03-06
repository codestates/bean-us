import React from 'react';
import styled from 'styled-components';

// import { checkToken } from '../network/sign/checkToken';

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 4px 21px 0;
  background-color: ${({ main }) => (main ? 'rgba(0, 0, 0, 0)' : '#c8aa9b')};
`;
const LoginBtn = styled.button`
  width: 110px;
  height: 20px;
  background: none;
  font-family: 'Cafe24Simplehae';
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  text-shadow: ${({ main }) => (main ? '0 0 10px #000' : 'none')};
  color: ${({ main }) => (main ? '#fff' : '#000')};
  color: ${({ renderModal }) => renderModal && '#fff'};
  z-index: 10;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: ${({ main }) => (main ? 'grey' : '#877158')};
  }
`;
const LogoutBtn = styled.button`
  width: 60px;
  height: 20px;
  background: none;
  font-family: 'Cafe24Simplehae';
  font-weight: 500;
  padding: 4px;
  border: none;
  cursor: pointer;
  z-index: 10;
  color: ${({ main }) => (main ? '#fff' : '#000')};
  color: ${({ renderModal }) => renderModal && '#fff'};
  &:hover {
    cursor: pointer;
    background-color: ${({ main }) => (main ? 'grey' : '#877158')};
  }
`;

const Greeting = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-family: 'Cafe24Simplehae';
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
