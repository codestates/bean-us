import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';

const ModalHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.5rem;
  font-weight: bold;

  & .closeIcon {
    font-size: 1.7rem;
    /* color: rgba(0, 0, 0, 0.3); */
    color: ${({ theme }) => theme.color.darkGreen};
    margin-bottom: 1rem;
    transition: all 0.2s;
  }
  & .closeIcon:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export default function ModalHeader({ cardBeanInfo, closeModal }) {
  console.log('cardBeanInfo', cardBeanInfo);
  let { beanName } = cardBeanInfo[0];
  const closeBtn = () => {
    closeModal();
  };

  return (
    <ModalHead className='header'>
      <FaTimesCircle onClick={closeBtn} className='closeIcon' />
      <div>{beanName}</div>
    </ModalHead>
  );
}
