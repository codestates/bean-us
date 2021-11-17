import React, { useState } from 'react';
import styled from 'styled-components';
import ViewComment from './ViewComment';
import WriteComment from './WriteComment';

const CommentUl = styled.ul`
  padding: 30px;
  width: 100%;
`;

export default function PostComment({ comments, postId, loginId }) {
  const [allComments, setAllComments] = useState([...comments]);

  const addComment = (commentText) => {
    let newComment = {
      comment: commentText,
      userId: loginId,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setAllComments([{ ...newComment }, ...allComments]);
  };

  const deleteComment = (comId) => {
    let filterComment = allComments.filter((com) => com.commentId !== comId);
    setAllComments([...filterComment]);
  };

  return (
    <>
      <WriteComment postId={postId} addComment={addComment} loginId={loginId} />
      <CommentUl>
        {allComments.map((comment) => (
          <ViewComment
            key={comment.commentId || comment.createdAt}
            postId={postId}
            loginId={loginId}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </CommentUl>
    </>
  );
}
