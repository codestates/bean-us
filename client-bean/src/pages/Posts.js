/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostSearch from '../components/postspage/PostSearch';
import PostCards from '../components/postspage/PostCards';
import { MdPostAdd } from 'react-icons/md';
import { getAllPosts } from '../network/postspage/http';
import { getFilterdPost } from '../network/postspage/http';
import { Link } from 'react-router-dom';
import { useLoading } from '../hooks/useLoading';
import LoadingPage from './LoadingPage';

const PostsContainer = styled.div`
  position: relative;
  width: 1200px;
  margin: auto;
  cursor: default;
  overflow-y: auto;
  overflow-x: hidden;

  & .title {
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Cafe24Ohsquareair';
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CreatePost = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  padding-left: 97%;
  cursor: pointer;
  margin-bottom: 14px;
  & .postIcon {
    line-height: 1.5rem;
    vertical-align: bottom;
    &:hover {
      color: #bbc8b5;
    }
  }
`;

export default function Posts({ isLogin }) {
  // const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const [posts, isLoading, setPosts] = useLoading([], getAllPosts)
  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res.postList);
    });
  }, []);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    getFilterdPost(value).then((res) => {
      setPosts(res.postList);
      console.log(res);
    });
  };

  return (
    <>
      {isLoading ? <LoadingPage content='Loading...' spinner/> : 
      <PostsContainer>
      <div className='title'>게시글</div>
      <PostSearch
        handleClick={handleClick}
        handleInputChange={handleInputChange}
        posts={posts}
        value={value}
      />
      {isLogin ? (
        <StyledLink to='/posts/create'>
          <CreatePost>
            <MdPostAdd className='postIcon' />
          </CreatePost>
        </StyledLink>
      ) : null}
      <PostCards posts={posts} />
    </PostsContainer>
      }
    </>
  );
}
