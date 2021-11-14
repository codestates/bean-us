import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentWrap } from '../../../../styles/basicFrame/ContentWrap';
import BtnFrame from '../../../../styles/basicFrame/Btn';

// import PostComment from './PostComment';

const CommentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentLable = styled.label.attrs({
  htmlFor: 'comment',
})`
  display: block;
`;

const CommentBox = styled.textarea.attrs({
  type: 'textarea',
  id: 'comment',
  placeholder: '댓글을 남겨보세요.',
  rows: '1',
})`
  width: 100%;
  resize: none;
  font-size: 1.1.rem;
  background-color: transparent;
  border: none;
  border-radius: 5px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &:focus {
    outline: 0;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export default function WriteComment({ postId }) {
  // 연습용
  let loginId = 'meme';

  const [commentText, setCommentText] = useState('');

  const submitComment = (e) => {
    e.preventDefault();
    if (!commentText) return;
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }
    console.log(e);
    //! POST /posts/comment/posting-id
    // PostComment(postId, commentText);

    setCommentText('');
  };

  const changeText = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <>
      <div className='subtitle'>댓글</div>
      <ContentWrap>
        <form onSubmit={submitComment}>
          <CommentTop>
            <CommentLable>{loginId}</CommentLable>
            <BtnFrame content='등록' />
          </CommentTop>
          <CommentBox onChange={changeText} value={commentText} />
        </form>
      </ContentWrap>
    </>
  );
}
