import React from 'react';
import styled from 'styled-components';
import BeanCard from './BeanCard';
// import { getBeanPost } from '../../network/beans/http';
// import { FaRegHeart } from 'react-icons/fa';

const CardWrap = styled.div`
  & .noCard {
    width: 100%;
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

export default function BeanCards({ beans, beanModal }) {
  console.log(beans);
  return (
    <CardWrap>
      {beans.length ? (
        <CardsUL>
          {beans.map((bean) => (
            <BeanCard key={bean.beanId} bean={bean} beanModal={beanModal} />
          ))}
        </CardsUL>
      ) : (
        <div className='noCard'>해당하는 원두가 없습니다</div>
      )}
    </CardWrap>
  );
}
