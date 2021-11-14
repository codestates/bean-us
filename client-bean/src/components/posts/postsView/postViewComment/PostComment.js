import React from 'react';
import ViewComment from './ViewComment';
import WriteComment from './WriteComment';

export default function PostComment({ comments, postId }) {
  // 받아온 userId가 loginId와 같다면 삭제, 수정버튼 제공

  //! comment post한 후 get 서버 요청하지 말고 그냥 브라우저 상에서만 보여주자 => naver에서 그렇게 하는 것 같음

  return (
    <>
      <WriteComment postId={postId} />
      <ViewComment comments={comments} postId={postId} />
    </>
  );
}
