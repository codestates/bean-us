/* eslint-disable no-unused-vars */

// package
import React, { useState } from 'react';
import styled from 'styled-components';
// component
import { H2 } from '../../../styles/signs/SignTitle';
import InputLine from '../../../styles/signs/InputLine';
import SignButton, { Button } from '../../../styles/signs/SignButton';

// functions
import { loginReq } from '../../../network/sign/signApi';

const ErrorMessage = styled.p`
  margin-left: 15px;
  font-size: 13px;
  color: #95673d;
`;

const KakaoButton = styled.button`
  margin-left: 27px;
  width: 300px;
  height: 50px;
  background: url('/asset/logins/kakaoButton.png');
  border: none;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.4);
  }
`;

const GithubButton = styled.button`
  display: flex;
  margin-top: 12px;
  margin-left: 27px;
  width: 300px;
  height: 50px;
  border: none;
  background-color: #444;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.8);
  }
`;

const GuthubImg = styled.img`
  margin-left: 3px;
  width: 30px;
`;

const GithubP = styled.p`
  margin-left: 78px;
  color: #fff;
  font-size: 15px;
`;

export default function Login({ loginHandler, modalHandler, renderSignupHandler }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const inputHandler = (e) => {
    if (e.target.name === 'userId') {
      setUserId(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const btnLoginClick = () => {
    loginReq(userId, password).then((res) => {
      if (res.data.data) {
        loginHandler();
        setUserId('');
        setPassword('');
        setLoginError('');
        modalHandler();
      } else {
        setLoginError(res.data.message);
      }
    });
  };

  const kakaoOAuthHandler = () => {
    const http = process.env.REACT_APP_HTTPURL;
    window.location.href = `${http}/auth/kakao`;
  };

  return (
    <>
      <H2>Log in</H2>
      <InputLine name='userId' title='아이디' marginTop='40px' inputHandler={inputHandler} />
      <InputLine name='password' title='비밀번호' type='password' inputHandler={inputHandler} />
      <ErrorMessage>{loginError}</ErrorMessage>
      <SignButton
        leftBtn='회원가입?'
        rightBtn='로그인'
        leftBtnHandler={renderSignupHandler}
        rightBtnHandler={btnLoginClick}
        marginTop='30px'
        marginBottom='30px'
      />
      <KakaoButton onClick={kakaoOAuthHandler}></KakaoButton>
      <GithubButton>
        <GuthubImg src='/asset/logins/githubButton.png' alt='Github' />
        <GithubP>Gihub 로그인</GithubP>
      </GithubButton>
    </>
  );
}
