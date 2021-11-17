import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    height: 400px;
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
    padding: 10px;
    font-family: 'Cafe24Ohsquareair';
  }

  & .beanInfo {
    display: flex;
    flex-wrap: wrap;
  }
  & .beanLabel {
    background-color: #bbc8b5;
    margin-right: 8px;
    margin-top: 2px;
    padding: 2px;
    border-radius: 5px;
    flex: none;
    font-size: 14px;
    font-family: 'Cafe24SsurroundAir';
  }
  & .userInfo {
    /* background-color: magenta; */
    position: absolute;
    top: 80%;
    margin-top: 10px;
    margin-right: 18px;
    font-size: 0.8rem;
    padding: 2px;
    font-family: 'Cafe24SsurroundAir';
  }
  & .createdAt {
    position: absolute;
    top: 90%;
    left: 31%;
    text-align: right;
    margin-right: 18px;
    font-size: 0.7rem;
    padding: 3px;
  }
`;

export default function PostCards(props) {
  const { posts } = props;

  let navigate = useNavigate();

  const postCardClick = (postId) => {
    navigate(`/posts/view/${postId}`);
  };

  return (
    <CardWrap>
      {posts.length ? (
        <CardsUL>
          {posts.map((post) => (
            <CardsLi
              key={post.postId}
              onClick={() => postCardClick(post.postId)}
              className='postlink'
            >
              <div className='contentWrap'>
                <div className='imgWrap'>
                  <img
                    src={post.imageUrl ? post.imageUrl : '/asset/postspage/post-no-img.jpg'}
                    alt='postImg'
                  />
                </div>
                <div className='contentTitle'>
                  {/* {post.title.length > 12 ? post.title.slice(0, 13) + '...' : post.title} */}
                  {post.title}
                </div>
                <div className='beanInfo'>
                  {post.beans.map((bean) => (
                    <div key='' className='beanLabel'>
                      #{bean.beanName}
                    </div>
                  ))}
                </div>
                <div className='userInfo'>작성자: {post.userId}</div>
                <div className='createdAt'>{post.createdAt}</div>
              </div>
            </CardsLi>
          ))}
        </CardsUL>
      ) : (
        <div className='noCard'>해당하는 게시글이 없습니다.</div>
      )}
    </CardWrap>
  );
}
