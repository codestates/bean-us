import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrap = styled.div`
  & .noCard {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`;

const CardsUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-between;
  grid-gap: 30px;
  margin-bottom: 1rem;
  & .postlink {
    text-decoration: none;
    color: black;
  }
`;

const CardsLi = styled.li`
  position: relative;
  & .contentWrap {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 20px 0 10px 20px;
  }

  & .imgWrap {
    position: relative;
    overflow: hidden;
    width: 210px;
    height: 160px;
    border-radius: 2px;
    border: 2px solid rgba(157, 156, 147, 0.5);
    transition: all 0.3s;
  }

  & .imgWrap:hover {
    transform: scale(1.05);
  }

  & img {
    position: absolute;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    cursor: pointer;
  }

  & .contentTitle {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 20px;
  }

  & .beanInfo {
    display: flex;
  }
  & .beanLabel {
    background-color: #bbc8b5;
    margin-right: 8px;
    padding: 2px;
    border-radius: 5px;
  }
  & .userInfo {
    /* background-color: magenta; */
    margin-top: 5px;
    margin-right: 18px;
    font-size: 0.8rem;
  }
  & .createdAt {
    text-align: right;
    margin-right: 18px;
    font-size: 0.7rem;
  }
`;

function PostCards(props) {
  const { posts } = props;
  return (
    <CardWrap>
      {posts.length ? (
        <CardsUL>
          {posts.map((post) => (
            <Link
              to={{ pathname: '/posts/post', search: `?postId=${post.postId}` }}
              key={post.postId}
              className='postlink'
            >
              <CardsLi key={post.postId}>
                <div className='contentWrap'>
                  <div className='imgWrap'>
                    <img
                      src={post.imageUrl ? post.imageUrl : '/asset/postspage/post-no-img.jpg'}
                      alt='postImg'
                    />
                  </div>
                  <div className='contentTitle'>
                    {post.title.length > 12 ? post.title.slice(0, 13) + '...' : post.title}
                  </div>
                  <div className='beanInfo'>
                    {post.beans.map((bean) => (
                      <div key='' className='beanLabel'>
                        #{bean}
                      </div>
                    ))}
                  </div>
                  <div className='userInfo'>작성자: {post.userName}</div>
                  <div className='createdAt'>{post.createdAt}</div>
                </div>
              </CardsLi>
            </Link>
          ))}
        </CardsUL>
      ) : (
        <div className='noCard'>해당하는 게시글이 없습니다.</div>
      )}
    </CardWrap>
  );
}

export default PostCards;
