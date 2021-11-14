/*eslint-disable no-unused-vars*/
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Background } from '../../components/signModal/SignModal';
import { H2 } from '../../styles/signs/SignTitle';
import SignButton from '../../styles/signs/SignButton';

import { passwordValidation } from '../../utils/validation';

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  } to {
    transform: translateY(0px)
  }
`;

const Container = styled.div`
  width: 468px;
  height: 350px;
  padding: 15px 0 0 25px;
  background-color: #eee;
  position: relative;
  background: #eee;
  box-sizing: border-box;
  animation: ${slideUp} 0.25s ease-out;
  transition: all 0.5s;
`;

const LineWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const P = styled.p`
  width: 120px;
`;

const Input = styled.input`
  margin-left: 5px;
  width: 230px;
  height: 30px;
`;

const ValidMessage = styled.p`
  margin: 0 0 0 158px;
  font-size: 12px;
  color: #95673d;
`;

export default function EditPassword({ setEditPassword }) {
  const [curPwd, setCurPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [newPwdCheck, setNewPwdCheck] = useState('');

  const [isValidPassword, setIsValidPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const inputHandler = (e) => {
    if (e.target.name === 'curPwd') {
      console.log('eh');
      setCurPwd(e.target.value);
    } else if (e.target.name === 'newPwd') {
      setNewPwd(e.target.value);
      if (e.target.value && !passwordValidation(e.target.value)) {
        setIsValidPassword('8~16자, 최소 하나의 숫자와 특수문자가 필요합니다');
      } else {
        setIsValidPassword('');
      }
    } else if (e.target.name === 'newPwdCheck') {
      setNewPwdCheck(e.target.value);
      if (e.target.value === '') {
        setCheckPassword('');
      } else if (e.target.value !== newPwd) {
        setCheckPassword('비밀번호가 일치하지 않습니다');
      } else {
        setCheckPassword('비밀번호가 일치합니다');
      }
    }
  };

  return (
    <Background>
      <Container>
        <H2>비밀번호 변경</H2>
        <LineWrapper>
          <P>현재 비밀번호</P>
          <Input name='curPwd' onChange={inputHandler} type='password'></Input>
        </LineWrapper>
        <LineWrapper>
          <P>새 비밀번호</P>
          <Input name='newPwd' onChange={inputHandler} type='password'></Input>
        </LineWrapper>
        <ValidMessage>{isValidPassword}</ValidMessage>
        <LineWrapper>
          <P>새 비밀번호 확인</P>
          <Input name='newPwdCheck' onChange={inputHandler} type='password'></Input>
        </LineWrapper>
        <ValidMessage>{checkPassword}</ValidMessage>
        <SignButton
          marginLeft='45px'
          marginTop='20px'
          leftBtn='비밀번호 변경 취소'
          rightBtn='비밀번호 변경'
        ></SignButton>
      </Container>
    </Background>
  );
}
