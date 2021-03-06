import React, { useState } from 'react';
import styled from 'styled-components';
import { editPutComment } from '../../../../network/postsView/http';
import { TextAreaFrame } from '../../../../styles/basicFrame/TextareaFrame';
import PostCommentUser from './PostCommentUser';

const CommentLi = styled.li`
  color: rgba(37, 40, 48, 0.8);
  margin-bottom: 0.9rem;
  border-bottom: ${({ theme }) => theme.line.frame};
  & .user {
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
  & .date {
    font-size: 0.8rem;
  }
`;

const CommentUser = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditText = styled(TextAreaFrame)`
  background-color: ${({ theme }) => theme.color.lightWhite};
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const FixedComment = styled.div`
  white-space: pre-line;
  margin-bottom: 0.5rem;
`;

function ViewComment({ comment, postId, loginId, deleteComment }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState(comment.comment);
  const [textRows, setTextRows] = useState(1);

  const setRows = (e) => {
    let previousRows = e.target.rows;
    e.target.rows = 1;
    let boxHeight = e.target.scrollHeight;
    let currentRows = Math.floor(boxHeight / 16);
    if (currentRows === previousRows) e.target.rows = currentRows;
    return currentRows;
  };

  const changeEditComment = (e) => {
    setEditComment(e.target.value);
    setTextRows(setRows(e));
  };

  const changeEdit = (data) => {
    setIsEdit(data);
  };

  const editComplete = (comId) => {
    let trimCommentText = editComment.trim();
    if (!trimCommentText) return;

    // PUT /posts/comments
    editPutComment(postId, comId, editComment).then(() => {
      changeEdit(false);
    });
  };

  return (
    <CommentLi>
      <CommentUser>
        <PostCommentUser
          comment={comment}
          isEdit={isEdit}
          postId={postId}
          loginId={loginId}
          deleteComment={deleteComment}
          changeEdit={changeEdit}
          editComplete={editComplete}
        />
      </CommentUser>
      {isEdit ? (
        <EditText value={editComment} onChange={changeEditComment} rows={textRows} />
      ) : (
        <FixedComment>{editComment}</FixedComment>
      )}
      <div className='date'>{comment.createdAt.split('T')[0]}</div>
    </CommentLi>
  );
}

export default ViewComment;
