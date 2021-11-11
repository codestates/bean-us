import React from 'react';
import styled from 'styled-components';

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

const BeanCards = ({ beans }) => {
  return (
    <CardsUL>
      {beans.map((bean) => (
        <li key={bean.beanId}>
          <div className="contentWrap">
            <div className="imgWrap">
              <img src={bean.beanImage} alt="beanImg" />
            </div>
            <ContentUL>
              <li className="beanName">{bean.beanName}</li>
              <li>{bean.origin}</li>
              <li>{bean.likeCount}</li>
              <li>{bean.like ? '하트' : '하트아님'}</li>
            </ContentUL>
          </div>
        </li>
      ))}
    </CardsUL>
  );
};

export default BeanCards;
