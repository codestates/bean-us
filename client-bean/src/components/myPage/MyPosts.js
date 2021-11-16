import React, { useState, useEffect } from 'react';
import { TopFrame } from '../../styles/basicFrame/TopFrame';

// import { getMyPosts } from '../../network/myPage/myPage';
import PostCards from '../postspage/PostCards';
import {getUserPost} from '../../network/postspage/http';

export default function MyPosts({loginId}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getUserPost(loginId).then((res) => {
      setPosts([...res.postList]);
    });
  }, [loginId]);

  return (
    <TopFrame>
      <PostCards posts={posts} />
    </TopFrame>
  );
}
