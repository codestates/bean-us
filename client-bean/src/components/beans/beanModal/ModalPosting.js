import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaChevronCircleDown } from 'react-icons/fa';
import ModalPostingLi from './ModalPostingLi';

const BeanPostWrap = styled.div`
  display: inline-block;
  width: 100%;
  overflow: hidden;

  & header {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    font-family: 'Cafe24Ohsquareair';
  }

  & .down {
    font-size: 2rem;
    color: #799369;
    transition: all 0.2s;
    transform: ${({ isPost }) => (isPost === true ? 'rotate(180deg)' : null)};
  }

  & .down:hover {
    cursor: pointer;
  }

  & ul {
    border-bottom: 2px solid rgba(95, 107, 95, 0.7);
    height: 550px;
    overflow: scroll;
    overflow-x: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function ModalPosting({ cardPostInfo }) {
  const [isPost, setIsPost] = useState(false);
  let postRef = useRef(null);

  const postScroll = () => {
    if (!isPost) postRef.current.scrollIntoView({ behavior: 'smooth' });
    else postRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    setIsPost(!isPost);
  };

  return (
    <BeanPostWrap isPost={isPost}>
      <header>
        <div ref={postRef}>게시글</div>
        <FaChevronCircleDown className='down' onClick={postScroll} />
      </header>
      <ul>
        {cardPostInfo.map((post) => (
          <ModalPostingLi key={post.postId} post={post} />
        ))}
      </ul>
    </BeanPostWrap>
  );
}

export default ModalPosting;
