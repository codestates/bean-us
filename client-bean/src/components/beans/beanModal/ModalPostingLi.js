import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TagFrame } from '../../../styles/basicFrame/TagFrame';

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

function ModalPostingLi({ post }) {
  return (
    <BeanPostList>
      <div className='firstDiv'>
        <FaChevronRight className='arrowIcon' />
        <div>
          <StyledLink
            to={{
              pathname: `/posts/view/${post.postId}`,
            }}
          >
            <div className='postTitle'>{post.title}</div>
          </StyledLink>
          {post.beans.map((name) => (
            <TagFrame key={name} color='rgba(121, 147, 105, 0.5)'>
              #{name}
            </TagFrame>
          ))}
        </div>
      </div>
      <div className='subContent'>
        <div>작성자 : {post.userId}</div>
        <span>{post.createAt}</span>
      </div>
    </BeanPostList>
  );
}

export default ModalPostingLi;
