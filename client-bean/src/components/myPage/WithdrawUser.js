import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { H2 } from '../../styles/signs/SignTitle';
import SignButton from '../../styles/signs/SignButton';

import { withdrawUser, withdrawOAuthUser } from '../../network/myPage/myPage';

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  } to {
    transform: translateY(0px)
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  } to {
    opacity: 1
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  animation: ${fadeIn} 0.25s ease-out;
`;

const Container = styled.div`
  width: 468px;
  height: ${({ social }) => (social === 'beanus' ? '350px' : '250px')};
  padding: 15px 0 0 25px;
  background-color: #eee;
  position: relative;
  background: #eee;
  box-sizing: border-box;
  animation: ${slideUp} 0.25s ease-out;
  transition: all 0.5s;
  border-radius: 20px;
  background: #f9f9f9;
`;

const LineWrapper = styled.div`
  margin-left: 40px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const B = styled.b`
  font-weight: 600;
`;

const P = styled.p`
  width: 100px;
`;

const SubText = styled.p`
  text-align: center;
  margin-top: ${({ entered }) => (entered === 'entered' ? '0' : '25px')};
  margin-bottom: ${({ entered }) => (entered === 'entered' ? '25px' : '5px')};
`;

const Input = styled.input`
  margin-left: 5px;
  width: 230px;
  height: 30px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.8);
  }
`;

const ValidMessage = styled.p`
  margin: 0 0 0 158px;
  font-size: 12px;
  color: #95673d;
`;

export default function WithdrawUser({ userId, withdrawCilckHandler, loginHandler, social }) {
  const [password, setPassword] = useState('');
  const [isMatched, setIsMatched] = useState('');

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setPassword(e.target.value);
  };

  const withdrawHandler = () => {
    if (social === 'beanus') {
      withdrawUser(userId, password).then((res) => {
        if (res.data.data) {
          withdrawCilckHandler();
          alert(res.data.message);
          loginHandler(false);
          navigate('/', { replace: true });
        } else {
          setIsMatched(res.data.message);
        }
      });
    } else {
      withdrawOAuthUser(userId, social).then((res) => {
        if (res.data.data) {
          withdrawCilckHandler();
          alert(res.data.message);
          loginHandler(false);
          navigate('/', { replace: true });
        } else {
          setIsMatched(res.data.message);
        }
      });
    }
  };

  return (
    <Background>
      <Container social={social}>
        <H2>정말로 탈퇴를 원히사나요?</H2>
        <SubText>
          <B>{`${userId}`}</B> 님과 함께한 순간을 잊지 않을게요
        </SubText>
        <SubText entered='entered'>다시 뵐 날을 기대하겠습니다</SubText>
        {social === 'beanus' ? (
          <>
            <LineWrapper>
              <P>비밀번호 확인</P>
              <Input name='newPwdCheck' onChange={inputHandler} type='password'></Input>
            </LineWrapper>
            <ValidMessage>{isMatched}</ValidMessage>
          </>
        ) : null}
        <SignButton
          marginLeft='45px'
          marginTop='20px'
          leftBtn='한 번 더 만나요'
          rightBtn='회원 탈퇴'
          leftBtnHandler={withdrawCilckHandler}
          rightBtnHandler={withdrawHandler}
        ></SignButton>
      </Container>
    </Background>
  );
}
