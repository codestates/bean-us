import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../styles/postspage/CreateBtn';
import {Link} from 'react-router-dom';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const CancelWrapper = styled.div`
  width: 270px;
  height: 200px;
  background: white;
  border-radius: 5px;
  padding-top: 50px;
  position: relative;
  & h4 {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function CancelModal({closeModal}) {
  return(
    <Background>
      <CancelWrapper>
        <h4>정말 취소하시겠습니까?</h4>
        <Button width='60px' height='30' marginLeft='68px' padding='2px' onClick={closeModal}>취소</Button>
        {/* 필수요소들이 채워지기 전에는 취소버튼만 보임 */}
        <StyledLink to='/posts'><Button width='60px' height='30' marginLeft='10px' padding='2px'>확인</Button></StyledLink>
      </CancelWrapper>
    </Background>
  );
}