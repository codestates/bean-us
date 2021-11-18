import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import BtnFrame from '../../../../styles/basicFrame/Btn';
import { delPost } from '../../../../network/postsView/http';

const PostHeadWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & .postTitle {
    margin-bottom: 1rem;
  }

  & .underTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.5);

    & .postInfo {
      display: flex;
      align-items: center;
    }

    & .initial {
      border-radius: 50%;
      width: 35px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      margin-right: 0.5rem;
      color: black;
      background-color: rgba(95, 107, 95, 0.7);
    }

    & .user {
      font-weight: bold;
    }
  }
`;

export default function PostHeader({ postCotents, postId, loginId }) {
  let { title, userId, createdAt } = postCotents;

  let navigate = useNavigate();

  const deletePost = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      // DELETE /posts/ 게시물 삭제 요청
      delPost(postId).then(() => {
        alert('삭제되었습니다');
        navigate('/posts', { replace: true });
      });
    }
  };

  const editPost = () => {
    navigate(`/posts/edit/${postId}`);
  };

  return (
    <div className='subtitle'>
      <PostHeadWrap>
        <div className='postTitle'>{title}</div>
        <div className='underTitle'>
          <div className='postInfo'>
            <span className='initial'>{userId.charAt(0)}</span>
            <ul>
              <li className='user'>작성자 : {userId}</li>
              <li className='date'>{createdAt}</li>
            </ul>
          </div>
          {loginId === userId && (
            <div>
              <BtnFrame content='수정' clickEvent={editPost} />
              <BtnFrame content='삭제' marginLeft='3px' clickEvent={deletePost} />
            </div>
          )}
        </div>
      </PostHeadWrap>
    </div>
  );
}
