import React, { useEffect, useState } from 'react';
import { InnerFrame } from '../../../styles/basicFrame/InnerFrame';
import PostHeader from './postViewContent/PostHeader';
import PostComment from './postViewComment/PostComment';
import PostSection from './postViewContent/PostSection';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
// import { getPostInfo } from '../../../network/http/postView';

//db 더미 데이
import { postView } from '../../../db/postView';

export default function PostView({ postId }) {
  const [postInfo, setPostInfo] = useState({ ...postView });

  let { id } = useParams();

  useEffect(() => {
    //! TODO GET /post?post-id=postId 요청
    // getPostInfo(postId).then((res) => setPostInfo(res));
    setPostInfo({ ...postView });
  }, []);

  const nonPost = () => {
    alert('해당 게시물이 없거나 삭제되었습니다');
    return <Navigate to='/posts' replace />;
  };

  return (
    <>
      {postInfo ? (
        <InnerFrame>
          <PostHeader postCotents={postInfo.postCotents} postId={id} />
          <PostSection postCotents={postInfo.postCotents} />
          <PostComment comments={postInfo.comments} postId={postId} />
        </InnerFrame>
      ) : (
        <>
          {/* alert('삭제되거나 없는 게시물입니다') */}
          {nonPost()}
        </>
      )}
    </>
  );
}
