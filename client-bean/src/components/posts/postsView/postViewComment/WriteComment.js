import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ContentWrap } from '../../../../styles/basicFrame/ContentWrap';
import BtnFrame from '../../../../styles/basicFrame/Btn';
import { TextAreaFrame } from '../../../../styles/basicFrame/TextareaFrame';

// import PostComment from './PostComment';

const CommentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentLable = styled.label.attrs({
  htmlFor: 'comment',
})`
  display: block;
  font-weight: bold;
`;

export default function WriteComment({ postId, addComment }) {
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
    // PostComment(postId, commentText).then((res) => {
    //   addComment(res);
    //   setCommentText('');
    //   textRef.current.rows = 1;
    // });

    addComment({
      userId: loginId,
      commentId: 8,
      comment: commentText,
      createAt: '2020-12-20',
    });
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
          <TextAreaFrame
            id='comment'
            placeholder='댓글을 남겨보세요.'
            ref={textRef}
            rows={textRows}
            onChange={changeText}
            value={commentText}
          />
        </form>
      </ContentWrap>
    </>
  );
}
