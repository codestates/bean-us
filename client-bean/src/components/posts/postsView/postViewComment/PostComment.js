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
  // 받아온 userId가 loginId와 같다면 삭제, 수정버튼 제공
  const [allComment, setAllComment] = useState([...comments]);

  //! comment post한 후 get 서버 요청하지 말고 그냥 브라우저 상에서만 보여주자 => naver에서 그렇게 하는 듯?

  const addComment = (newComment) => {
    setAllComment([newComment, ...allComment]);
  };

  const deleteComment = (comId) => {
    console.log(comId);
    let filterComment = allComment.filter((com) => com.commentId !== comId);
    setAllComment([...filterComment]);
  };
  console.log(allComment);
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
