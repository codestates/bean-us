import React, { useState } from 'react';
import styled from 'styled-components';

import Login from './signs/Login';
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
  width: 700px;
  height: 400px;
  background: #eee;
  padding: 3px 30px;
  box-sizing: border-box;
`;

const SignModal = () => {
  const [renderSignup, setRenderSignup] = useState(false);

  const renderSignupHanlder = () => {
    setRenderSignup(true);
  };
  return (
    <Background>
      <SignWrapper>
        <div>{renderSignup ? <Signup /> : <Login renderSignupHanlder={renderSignupHanlder} />}</div>
        <div></div>
      </SignWrapper>
    </Background>
  );
};

export default SignModal;
