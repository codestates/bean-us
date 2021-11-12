import React from 'react';
import styled from 'styled-components';
import PostSearch from '../components/postspage/PostSearch';
import PostCards from '../components/postspage/PostCards';
import postCarddb from '../db/postCarddb';
import { MdPostAdd } from "react-icons/md";

const PostsContainer = styled.div`
  position: relative;
  width: 1100px;
  margin: auto;
  cursor: default;

  & .title {
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const CreatePost = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  padding-left: 97%;
  cursor: pointer;
  & .postIcon {
    line-height: 1.5rem;
    vertical-align: bottom;
    &:hover {
      color: #bbc8b5;
    }
  }
`;

export default function Posts() {
  const posts = postCarddb;
  console.log(posts)
	return (
		<PostsContainer>
				<div className='title'>게시글</div>
				<PostSearch />
        <CreatePost>
          <MdPostAdd className="postIcon"/>
        </CreatePost>
        <PostCards posts={posts}/>
		</PostsContainer>
	)
}
