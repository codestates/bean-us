import React, { useEffect, useState } from 'react';
import { InnerFrame } from '../../../styles/basicFrame/InnerFrame';
import PostHeader from './postViewContent.js/PostHeader';
import PostComment from './postViewContent.js/PostComment';
import PostSection from './postViewContent.js/PostSection';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
// import { getPostInfo } from '../../../network/postsView/postView';

//db 더미 데이
import { postView } from '../../../db/postView';

export default function PostView(props) {
  const [postInfo, setPostInfo] = useState(null);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    //! TODO GET /post?post-id=postId 요청
    // getPostInfo(postId).then((res) => setPostInfo(res));
    setPostInfo({ ...postView });
  }, []);

  return (
    <>
      {postInfo ? (
        <InnerFrame>
          <PostHeader postCotents={postInfo.postCotents} />
          <PostSection postCotents={postInfo.postCotents} />
          <PostComment comments={postInfo.comments} />
        </InnerFrame>
      ) : (
        <>
          {/* alert('삭제되거나 없는 게시물입니다') */}
          <Navigate to='/posts' replace />
        </>
      )}
    </>
  );
}
