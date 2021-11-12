import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
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
  justify-content: space-between;
  grid-gap: 30px;
  margin-bottom: 1rem;
`;

const CardLI = styled.li`
  position: relative;

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
    transition: all 0.3s;
  }

  & .imgWrap:hover {
    transform: scale(1.05);
  }

  & img {
    position: absolute;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
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
    font-size: ${({ beanName }) => (beanName.length < 10 ? '1.4rem' : '1.09rem')};
    font-weight: bold;
  }

  & .heart {
    position: absolute;
    right: 0;
    bottom: 0;
    color: ${({ like }) => (like === 'true' ? 'rgba(202, 28, 50, 0.8)' : 'rgba(0,0,0,0.2)')};
    box-sizing: content-box;
    padding: 1rem;
    font-size: 1.5rem;
    transition: all 0.3s;
  }

  & .heart:hover {
    transform: scale(1.15);
    color: rgba(202, 28, 50, 0.8);
  }
`;

export default function BeanCards({ beans, beanModal }) {
  const cardClick = (e, beanId) => {
    //TODO GET /bean?beanId=beanId 해당 원두와 관련된 게시글 요청
    // getBeanPost(beanId).then((res) => {
    //   console.log(res);
    //   beanModal(beanId, 'get 통신 결과 bean과 관련된 post 정보');
    // });

    let { tagName } = e.target;
    if (tagName === 'svg' || tagName === 'path') return;
    beanModal(beanId, 'get 통신 결과 bean과 관련된 post 정보');
  };

  const heartClick = (e) => {
    //TODO ContentUL 하위의 LI 컴포넌트를 만들어서 beans.like를 하나씩 받아 state로 놓아 상태관리
    console.log(e);
  };

  console.log(beans);
  return (
    <CardWrap>
      {beans.length ? (
        <CardsUL>
          {beans.map((bean) => (
            <CardLI key={bean.beanId} onClick={(e) => cardClick(e, bean.beanId)}>
              <div className='contentWrap'>
                <div className='imgWrap'>
                  <img src={bean.beanImage} alt='beanImg' />
                </div>
                <ContentUL beanName={bean.beanName}>
                  {/* 하위 컴포넌트 생성하여 하나씩 like 값을 관리해야 한다. */}
                  <li className='beanName'>{bean.beanName}</li>
                  <li>{bean.origin}</li>
                  <li>{bean.likeCount}</li>
                  <FaHeart className='heart' onClick={heartClick} />
                </ContentUL>
              </div>
            </CardLI>
          ))}
        </CardsUL>
      ) : (
        <div className='noCard'>해당하는 원두가 없습니다</div>
      )}
    </CardWrap>
  );
}
