import React from 'react';
import styled from 'styled-components';
import Question1 from '../components/postsCreate/Question1';

const PostCreateCnt = styled.div`
  
`;
const PcHeader = styled.div`
  position: relative;
  & div {
    width: 130px;
    height: 80px;
    margin-left: 73px;
    margin-top: 20px;
    & img {
      width:130px;
    }
  }
  
`;

const SaveBtn = styled.button`
  position: absolute;
  top: 10%;
  left: 85%;
  width: 60px;
  height: 30px;
  background-color: #92b365;
  border: none;
  padding-top: 2px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  &:hover {
    color: white;
    border: 1px solid white;
  }
`;

const CancleBtn = styled.button`
  position: absolute;
  top: 10%;
  left: 90%;
  width: 60px;
  height: 30px;
  background-color: #bd6b5d;
  padding-top: 2px;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  &:hover {
    color: white;
    border: 1px solid white;
  }
`;

function PostsCreate() {
  return(
    <PostCreateCnt>
      <PcHeader>
        <div>
          <img src='/asset/mainpage/logo.png' alt='logo'/>
        </div>
        <SaveBtn>게시</SaveBtn>
        <CancleBtn>취소</CancleBtn>
      </PcHeader>
      <Question1 />
    </PostCreateCnt>
  );
}

export default PostsCreate;