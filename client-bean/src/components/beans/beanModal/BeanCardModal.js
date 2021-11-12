import React from 'react';
import styled from 'styled-components';
import ModalBeanInfo from './ModalBeanInfo';
import ModalHeader from './ModalHeader';
import ModalPosting from './ModalPosting';

const CardModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  padding: 3rem 5rem;
  width: 900px;
  height: 700px;
  border-radius: 5px;
  background-color: white;
  overflow: scroll;
  overflow-x: auto;
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none; // 윈도우 크롬 등
  }
`;

export default function BeanCardModal({ cardPostInfo, cardBeanInfo, closeModal }) {
  return (
    <CardModalContainer>
      <ModalWrap>
        <ModalHeader cardBeanInfo={cardBeanInfo} closeModal={closeModal} />
        <ModalBeanInfo cardBeanInfo={cardBeanInfo} />
        <ModalPosting cardPostInfo={cardPostInfo} />
      </ModalWrap>
    </CardModalContainer>
  );
}
