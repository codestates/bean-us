/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';
import { FiUserX } from 'react-icons/fi';
import { BsExclamationLg } from 'react-icons/bs';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 92.5vh;
  font-size: 80px;
  margin: 0;
  /* color: ; */
`;

const SmallP = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-left: 15vw;
  margin-bottom: 0;
`;

const P = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 50px;
  font-weight: 600;
  margin-top: 40px;
`;

export default function LoginRequest() {
  return (
    <>
      <Wrapper>
        <SmallP>
          <BsExclamationLg style={{ color: 'red' }} />
          로그인이 안 돼있어요
        </SmallP>
        <FiUserX />
        <P>로그인을 통해 다양한 서비스를 체험해보세요</P>
      </Wrapper>
    </>
  );
}
