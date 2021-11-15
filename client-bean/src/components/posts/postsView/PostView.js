import React from 'react';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

import { InnerFrame } from '../../../styles/basicFrame/InnerFrame';
import PostHeader from './postViewContent/PostHeader';
import PostComment from './postViewComment/PostComment';
import PostSection from './postViewContent/PostSection';
import { useLoading } from '../../../hooks/useLoading';
import LoadingPage from '../../../pages/LoadingPage';
// import { getPostInfo } from '../../../network/postsView/http';

// db 더미 데이터

export default function PostView(props) {
  let { id } = useParams();

  // let [postContent, isLoading] = useLoading({}, getPostInfo(id), id);
  let [postContent, isLoading] = useLoading({}, null, id);

  const nonPost = () => {
    alert('해당 게시물이 없거나 삭제되었습니다');
    return <Navigate to='/posts' replace />;
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {postContent ? (
            <>
              <div className='title'>게시물 열람</div>
              <InnerFrame>
                <PostHeader postCotents={postContent.postCotents} postId={id} />
                <PostSection postCotents={postContent.postCotents} />
                <PostComment comments={postContent.comments} postId={id} />
              </InnerFrame>
            </>
          ) : (
            <>{nonPost()}</>
          )}
        </>
      )}
    </>
  );
}
