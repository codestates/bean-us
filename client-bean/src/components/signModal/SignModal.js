import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Login from './signs/Login';
import Logout from './signs/Logout';
import Signup from './signs/Signup';

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
        width: 750px;
        height: 450px;
      `;
    }
  }}
  position: relative;
  background: #eee;
  padding: 3px 30px;
  box-sizing: border-box;
`;

const SignModal = ({ isLogin, loginHandler, modalHandler }) => {
  const [renderSignup, setRenderSignup] = useState(false);

  const renderSignupHandler = () => {
    setRenderSignup(!renderSignup);
  };

  return (
    <Background>
      <SignWrapper isLogin={isLogin} renderSignup={renderSignup}>
        {isLogin ? (
          <Logout loginHandler={loginHandler} modalHandler={modalHandler} />
        ) : (
          <div>
            {renderSignup ? (
              <Signup modalHandler={modalHandler} renderSignupHandler={renderSignupHandler} />
            ) : (
              <Login
                loginHandler={loginHandler}
                modalHandler={modalHandler}
                renderSignupHandler={renderSignupHandler}
              />
            )}
          </div>
        )}
        <div></div>
      </SignWrapper>
    </Background>
  );
};

export default SignModal;
