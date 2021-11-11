/* eslint-disable no-unused-vars */
// package
import React, { useState } from 'react';

// style
import { H2 } from '../../../styles/signs/SignTitle';
import InputLine from '../../../styles/signs/InputLine';
import SignButton from '../../../styles/signs/SignButton';

// functions
import { loginReq } from '../../../network/sign/signApi';

export default function Login({ renderSignupHanlder }) {
  const [renderSignup, setRenderSignup] = useState(false);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const inputHandler = (e) => {
    if (e.target.name === 'userId') {
      setUserId(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const loginHandler = async () => {
    const res = loginReq(userId, password);
    console.log(res);
  };

  return (
    <>
      <H2>Log in</H2>
      <InputLine name='userId' title='아이디' marginTop='40px' inputHandler={inputHandler} />
      <InputLine name='passowrd' title='비밀번호' type='password' inputHandler={inputHandler} />
      <SignButton leftBtn='회원가입' rightBtn='로그인' leftBtnHandler={renderSignupHanlder} rightBtnHandler={loginHandler} />
    </>
  );
}
