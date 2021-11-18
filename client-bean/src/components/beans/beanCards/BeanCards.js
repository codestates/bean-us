import React from 'react';
import styled from 'styled-components';
import { NoDataWrap } from '../../../styles/basicFrame/NoDataWrap';
import BeanCard from './BeanCard';

const CardsUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 30px;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default function BeanCards({ beans, loginId, beanModal }) {
  return (
    <>
      {beans.length ? (
        <CardsUL>
          {beans.map((bean) => (
            <BeanCard key={bean.beanId} bean={bean} beanModal={beanModal} loginId={loginId} />
          ))}
        </CardsUL>
      ) : (
        <NoDataWrap>해당하는 원두가 없습니다</NoDataWrap>
      )}
    </>
  );
}
