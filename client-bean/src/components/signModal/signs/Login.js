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
      console.log(res);
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
        marginBottom='40px'
      />
    </>
  );
}
