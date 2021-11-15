import React from 'react';
import styled from 'styled-components';

import { H2 } from '../../../styles/signs/SignTitle';
import { Button } from '../../../styles/signs/SignButton';

import { logoutReq } from '../../../network/sign/signApi';

export default function Logout({ modalHandler, loginHandler, saveLoginId }) {
  const clickHandler = () => {
    logoutReq().then((data) => {
      saveLoginId(null);
      loginHandler(false);
      modalHandler();
    });
  };

  const MarginH2 = styled(H2)`
    margin-top: 30px;
  `;

  const FlexWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <MarginH2>로그아웃 하시겠습니까?</MarginH2>
      <FlexWrapper>
        <Button onClick={clickHandler}>로그아웃</Button>
      </FlexWrapper>
    </>
  );
}
