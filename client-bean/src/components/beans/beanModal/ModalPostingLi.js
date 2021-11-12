import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//[{postId, title, beans: [beanName, beanName, beanName], userId(작성자), createAt}]
// 최신순으로 정렬

const BeanPostList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 2px solid rgba(44, 42, 40, 0.2);

  & .firstDiv {
    display: flex;
    align-items: center;

    & .postTitle {
      width: 450px;
      margin-bottom: 0.5rem;
      font-weight: bold;

      &:hover {
        cursor: pointer;
        color: rgba(101, 150, 105, 1);
      }
    }

    & .arrowIcon {
      font-size: 1.2rem;
      padding-right: 0.5rem;
    }

    & .beanName {
      display: inline-block;
      padding: 0 0.5rem;
      margin-right: 0.5rem;
      border-radius: 25px;
      background-color: rgba(121, 147, 105, 0.5);
    }
  }

  & .subContent {
    display: inline-block;
    width: 130px;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);

    & div {
      margin-bottom: 0.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function ModalPostingLi({ res }) {
  return (
    <BeanPostList>
      <div className='firstDiv'>
        <FaChevronRight className='arrowIcon' />
        <div>
          <StyledLink
            to={{
              pathname: `/posts/view/${res.postId}`,
            }}
          >
            <div className='postTitle'>{res.title}</div>
          </StyledLink>

          {res.beans.map((name) => (
            <span key={name} className='beanName'>
              # {name}
            </span>
          ))}
        </div>
      </div>
      <div className='subContent'>
        <div>작성자 : {res.userId}</div>
        <span>{res.createAt}</span>
      </div>
    </BeanPostList>
  );
}

export default ModalPostingLi;
