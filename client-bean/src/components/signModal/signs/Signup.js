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
import { idValidation, passwordValidation, emailValidation } from '../../../utils/validation';

const ValidMessage = styled.p`
  margin: 0 0 0 125px;
  font-size: 12px;
  color: #95673d;
`;

const ReqErrorMessage = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #95673d;
`;

export default function Signup({ renderSignupHandler }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [signupError, setSignupError] = useState('');

  const [isValidId, setIsValidId] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');
  const [nowValidPassword, setNowValidPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');

  const inputHandler = (e) => {
    if (e.target.name === 'userId') {
      setUserId(e.target.value);
      if (e.target.value && !idValidation(e.target.value)) {
        setIsValidId('4~12자, 영어와 숫자만 가능합니다');
      } else {
        setIsValidId('');
      }
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
      if (e.target.value && !passwordValidation(e.target.value)) {
        setIsValidPassword('8~16자, 최소 하나의 숫자와 특수문자가 필요합니다');
      } else {
        setIsValidPassword('');
      }
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
    if (
      isValidId === '사용할 수 있는 아이디입니다' &&
      !isValidPassword &&
      nowValidPassword === '비밀번호가 일치합니다' &&
      !isValidEmail
    ) {
      signupReq(userId, password, email).then((res) => {
        if (res.data.data) {
          setUserId('');
          setPassword('');
          setEmail('');
          setSignupError('');
          renderSignupHandler();
          alert(res.data.message);
        } else {
          setSignupError(res.data.message);
        }
      });
    } else {
      setSignupError('형식에 맞도록 작성해주세요');
    }
  };

  const blurHandler = (e) => {
    if (e.target.name === 'passwordCheck') {
      if (e.target.value !== password) {
        setNowValidPassword('비밀번호가 일치하지 않습니다');
      } else {
        setNowValidPassword('비밀번호가 일치합니다');
      }
    } else if (e.target.name === 'email') {
      if (e.target.value && !emailValidation(e.target.value)) {
        setIsValidEmail('사용할 수 없는 이메일 형식입니다');
      } else {
        setIsValidEmail('');
      }
    }
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
        blurHandler={blurHandler}
      />
      <ValidMessage>{nowValidPassword}</ValidMessage>
      <InputLine
        name='email'
        title='이메일'
        inputHandler={inputHandler}
        signup={true}
        blurHandler={blurHandler}
      />
      <ValidMessage>{isValidEmail}</ValidMessage>
      <ReqErrorMessage>{signupError}</ReqErrorMessage>
      <SignButton
        leftBtn='로그인?'
        rightBtn='회원가입'
        leftBtnHandler={renderSignupHandler}
        rightBtnHandler={btnSignupClick}
        marginTop='20px'
        marginBottom='50px'
        marginLeft='25px'
      />
    </>
  );
}
