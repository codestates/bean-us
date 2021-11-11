/* eslint-disable no-unused-vars */

// package
import React, { useState } from 'react';
import styled from 'styled-components';
// component
import { H2 } from '../../../styles/signs/SignTitle';
import InputLine from '../../../styles/signs/InputLine';
import SignButton, { Button } from '../../../styles/signs/SignButton';

// functions
import { signupReq, checkIdReq } from '../../../network/sign/signApi';

const ValidMessage = styled.p`
  margin: 0 0 0 125px;
  font-size: 12px;
  color: #95673d;
`;

export default function Signup({ renderSignupHandler }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState('');

  const [isValidId, setIsValidId] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');

  const inputHandler = (e) => {
    if (e.target.name === 'userId') {
      console.log(e.target.value);
      setUserId(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const checkDuplicate = () => {
    checkIdReq(userId).then((res) => {
      console.log(res.data);
      if (res.data.data) {
        setIsValidId(res.data.message);
      } else {
        setIsValidId(res.data.message);
      }
    });
  };

  const btnSignupClick = () => {
    signupReq(userId, password, email).then((res) => {
      if (res.data.data) {
        setUserId('');
        setPassword('');
        setEmail('');
        setLoginError('');
        renderSignupHandler();
        alert(res.data.message);
      } else {
        setLoginError(res.data.message);
      }
    });
  };

  return (
    <>
      <H2>Sign up</H2>
      <InputLine
        name='userId'
        title='아이디'
        marginTop='40px'
        inputHandler={inputHandler}
        signup={true}
        checkId={true}
        checkDuplicate={checkDuplicate}
      />
      <ValidMessage>{isValidId}</ValidMessage>
      <InputLine
        name='password'
        title='비밀번호'
        type='password'
        inputHandler={inputHandler}
        signup={true}
      />
      <ValidMessage>{isValidPassword}</ValidMessage>
      <InputLine
        name='passwordCheck'
        title='비밀번호 확인'
        type='password'
        inputHandler={inputHandler}
        signup={true}
      />
      <ValidMessage>{isValidPassword}</ValidMessage>
      <InputLine name='email' title='이메일' inputHandler={inputHandler} signup={true} />
      <ValidMessage>{isValidEmail}</ValidMessage>
      <ValidMessage>{loginError}</ValidMessage>
      <SignButton
        leftBtn='로그인?'
        rightBtn='회원가입'
        leftBtnHandler={renderSignupHandler}
        rightBtnHandler={btnSignupClick}
        marginTop='40px'
        marginBottom='50px'
        marginLeft='25px'
      />
    </>
  );
}
