import React from 'react';
import WriteComment from './WriteComment';

export default function PostComment({ comments, postId }) {
  // 받아온 userId가 loginId와 같다면 삭제, 수정버튼 제공

  return (
    <>
      <WriteComment comments={comments} postId={postId} />
    </>
  );
}
