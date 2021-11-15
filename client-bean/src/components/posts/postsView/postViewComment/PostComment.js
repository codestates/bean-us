/*eslint-disable no-unused-vars*/

import React, { useState } from 'react';
import styled from 'styled-components';
import ViewComment from './ViewComment';
import WriteComment from './WriteComment';

const CommentUl = styled.ul`
  padding: 30px;
  width: 100%;
`;

export default function PostComment({ comments, postId }) {
  const [allComment, setAllComment] = useState([...comments]);

  const addComment = (newComment) => {
    setAllComment([newComment, ...allComment]);
  };

  const deleteComment = (comId) => {
    let filterComment = allComment.filter((com) => com.commentId !== comId);
    setAllComment([...filterComment]);
  };

  return (
    <>
      <WriteComment postId={postId} addComment={addComment} />
      <CommentUl>
        {allComment.map((comment) => (
          <ViewComment
            key={comment.commentId}
            postId={postId}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </CommentUl>
    </>
  );
}
