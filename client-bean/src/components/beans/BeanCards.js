import React from 'react';
import styled from 'styled-components';
// import { getBeanPost } from '../../network/beans/http';

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
  justify-content: space-between;
  grid-gap: 30px;
  margin-bottom: 1rem;

  & .contentWrap {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 35px;
  }

  & .imgWrap {
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid rgba(157, 156, 147, 0.5);
  }

  & img {
    position: absolute;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & li {
    transition: all 0.3s;
  }

  & li:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const ContentUL = styled.ul`
  padding-top: 35px;
  text-align: center;

  & li {
    margin-bottom: 5px;
  }

  & .beanName {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default function BeanCards({ beans, beanModal }) {
  const cardClick = (beanId) => {
    //TODO GET /bean?beanId=beanId 해당 원두와 관련된 게시글 요청
    // getBeanPost(beanId).then((res) => {
    //   console.log(res);
    //   beanModal(beanId, 'get 통신 결과 bean과 관련된 post 정보');
    // });
    beanModal(beanId, 'get 통신 결과 bean과 관련된 post 정보');
  };

  return (
    <CardWrap>
      {beans.length ? (
        <CardsUL>
          {beans.map((bean) => (
            <li key={bean.beanId} onClick={() => cardClick(bean.beanId)}>
              <div className='contentWrap'>
                <div className='imgWrap'>
                  <img src={bean.beanImage} alt='beanImg' />
                </div>
                <ContentUL>
                  <li className='beanName'>{bean.beanName}</li>
                  <li>{bean.origin}</li>
                  <li>{bean.likeCount}</li>
                  <li>{bean.like ? '하트' : '하트아님'}</li>
                </ContentUL>
              </div>
            </li>
          ))}
        </CardsUL>
      ) : (
        <div className='noCard'>해당하는 원두가 없습니다</div>
      )}
    </CardWrap>
  );
}
