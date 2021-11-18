import React from 'react';
import PostView from '../components/posts/postsView/PostView';
import { TopFrame } from '../styles/basicFrame/TopFrame';

export default function PostsView({ postId, loginId }) {
  return (
    <TopFrame>
      <PostView postId={postId} loginId={loginId} />
    </TopFrame>
  );
}
