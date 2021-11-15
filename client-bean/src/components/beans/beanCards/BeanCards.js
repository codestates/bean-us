import React from 'react';
import styled from 'styled-components';
import BeanCard from './BeanCard';

const CardWrap = styled.div`
  & .noCard {
    width: 100%;
    height: 40vh;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`;

const CardsUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 30px;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default function BeanCards({ beans, loginId, beanModal }) {
  return (
    <CardWrap>
      {beans.length ? (
        <CardsUL>
          {beans.map((bean) => (
            <BeanCard key={bean.beanId} bean={bean} beanModal={beanModal} loginId={loginId} />
          ))}
        </CardsUL>
      ) : (
        <div className='noCard'>해당하는 원두가 없습니다</div>
      )}
    </CardWrap>
  );
}
