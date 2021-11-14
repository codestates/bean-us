import React, { useRef, useState } from 'react';
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
})`
  width: 100%;
  resize: none;
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
  const [textRows, setTextRows] = useState(1);

  const textRef = useRef();

  const submitComment = (e) => {
    e.preventDefault();
    let trimCommentText = commentText.trim();

    if (!trimCommentText) return;
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }
    //! POST /posts/comment/posting-id
    // PostComment(postId, commentText).then(() => {
    //   setCommentText('');
    //   textRef.current.rows = 1;
    // });

    setCommentText('');
    textRef.current.rows = 1;
  };

  const setRows = (e) => {
    let previousRows = e.target.rows;
    e.target.rows = 1; // reset number of rows in textarea

    let boxHeight = e.target.scrollHeight;
    let currentRows = Math.floor(boxHeight / 16);

    if (currentRows === previousRows) e.target.rows = currentRows;
    return currentRows;
  };

  const changeText = (e) => {
    setCommentText(e.target.value);
    setTextRows(setRows(e));
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
          <CommentBox ref={textRef} rows={textRows} onChange={changeText} value={commentText} />
        </form>
      </ContentWrap>
    </>
  );
}
