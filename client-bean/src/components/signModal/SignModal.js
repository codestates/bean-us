import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Login from './signs/Login';
import Logout from './signs/Logout';
import Signup from './signs/Signup';

const slideUp = keyframes`
  from {
    transform: translateY(-200px);
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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  animation: ${fadeIn} 0.25s ease-out;
`;

const SignWrapper = styled.section`
  ${({ isLogin, renderSignup }) => {
    if (isLogin) {
      return css`
        width: 450px;
        height: 240px;
      `;
    } else if (renderSignup) {
      return css`
        width: 450px;
      `;
    } else {
      return css`
        width: 720px;
        height: 450px;
      `;
    }
  }}
  position: relative;
  background: #eee;
  box-sizing: border-box;
  animation: ${slideUp} 0.25s ease-out;
  transition: all 0.5s;
`;

const LoginWrapper = styled.div`
  padding: 15px 0 0 25px;
`;

const LogoutWrapper = styled.div`
  padding: 3px 30px;
`;

const LoginImg = styled.img`
  margin-left: 30px;
  width: 300px;
  height: 450px;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const SignModal = ({ isLogin, modalHandler, saveLoginId, loginHandler }) => {
  const [renderSignup, setRenderSignup] = useState(false);
  const renderSignupHandler = () => {
    setRenderSignup(!renderSignup);
  };

  return (
    <Background>
      <SignWrapper isLogin={isLogin} renderSignup={renderSignup}>
        {isLogin ? (
          <LogoutWrapper>
            <Logout
              modalHandler={modalHandler}
              loginHandler={loginHandler}
              saveLoginId={saveLoginId}
            />
          </LogoutWrapper>
        ) : (
          <div>
            {renderSignup ? (
              <LoginWrapper>
                <Signup modalHandler={modalHandler} renderSignupHandler={renderSignupHandler} />
              </LoginWrapper>
            ) : (
              <FlexWrapper>
                <LoginWrapper>
                  <Login
                    modalHandler={modalHandler}
                    renderSignupHandler={renderSignupHandler}
                    saveLoginId={saveLoginId}
                    loginHandler={loginHandler}
                  />
                </LoginWrapper>
                <LoginImg src='asset/logins/signImg.jpg'></LoginImg>
              </FlexWrapper>
            )}
          </div>
        )}
      </SignWrapper>
    </Background>
  );
};

export default SignModal;
