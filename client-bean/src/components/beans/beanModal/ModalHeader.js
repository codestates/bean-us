import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const ModalHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Cafe24Ohsquareair';

  & .closeIcon {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.darkGreen};
    transition: all 0.2s;
  }
  & .closeIcon:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const CloseBtn = styled.button`
  border: 0;
  background-color: transparent;
`;

export default function ModalHeader({ cardBeanInfo, closeModal }) {
  let { beanName } = cardBeanInfo[0];

  return (
    <ModalHead className='header'>
      <CloseBtn onClick={(e) => closeModal(e, 'icon')}>
        <FaTimes className='closeIcon' />
      </CloseBtn>
      <div>{beanName}</div>
    </ModalHead>
  );
}
