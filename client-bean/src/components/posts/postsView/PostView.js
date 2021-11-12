import React, { useEffect, useState } from 'react';
import { InnerFrame } from '../../../styles/basicFrame/InnerFrame';
import PostHeader from './postViewContent.js/PostHeader';
import PostComment from './postViewContent.js/PostComment';
import PostSection from './postViewContent.js/PostSection';
// import { getPostInfo } from '../../../network/postsView/postView';

//db 더미 데이
import { postView } from '../../../db/postView';

function PostView({ postId }) {
  const [postInfo, setPostInfo] = useState({});

  useEffect(() => {
    //! TODO GET /post?post-id=postId 요청
    // getPostInfo(postId).then((res) => setPostInfo(res));

    setPostInfo(postView);
  }, [postId]);

  console.log(postInfo);

  return (
    <InnerFrame>
      <PostHeader />
      <PostSection />
      <PostComment />
    </InnerFrame>
  );
}

export default PostView;
