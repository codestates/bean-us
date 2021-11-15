/* eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react';
import { TopFrame } from '../../styles/basicFrame/TopFrame';

// import { getMyPosts } from '../../network/myPage/myPage';
import PostCards from '../postspage/PostCards';
import getAllPosts from '../../network/postspage/http';

export default function MyPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts([...res.postList])
    })
  }, []);

  return (
  <TopFrame>
    <PostCards posts={posts} />
  </TopFrame>
  )
}
