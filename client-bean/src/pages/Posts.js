import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PostSearch from '../components/postspage/PostSearch';
import PostCards from '../components/postspage/PostCards';
import { MdPostAdd } from "react-icons/md";
import getAllPosts from '../network/postspage/http';
import getFilterdPost from '../network/postspage/http';

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
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
    })
  },[])

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  const handleClick = () => {
    getFilterdPost(value).then((res) => {
      setPosts(res);
    })
  }



	return (
		<PostsContainer>
				<div className='title'>게시글</div>
				<PostSearch handleClick={handleClick} handleInputChange={handleInputChange} posts={posts}/>
        <CreatePost>
          <MdPostAdd className="postIcon"/>
        </CreatePost>
        <PostCards posts={posts}/>
		</PostsContainer>
	)
}
