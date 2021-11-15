import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
// import { delPost } from '../../../../network/postsView/http';

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

const PostBtn = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  width: 50px;
  height: 40px;
  text-align: center;
  margin: 0 0.5rem;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.heartRed};
  }
`;

export default function PostHeader({ postCotents, postId }) {
  // 테스트용 loginId
  let loginId = 'meme';

  let { title, userId, createAt } = postCotents;

  let navigate = useNavigate();

  const deletePost = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      //! TODO DELETE /posts/ 게시물 삭제 요청
      // delPost(postId).then((res) => {
      //   alert('삭제되었습니다');
      //   navigate('/posts', { replace: true });
      // });

      alert('삭제되었습니다');
      navigate('/posts', { replace: true });
    }
  };

  const editPost = () => {
    //! TODO onClick 했을 때 서버 통신하여 데이터를 받아 보내주는 것이 나은가??
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
              <li className='date'>{createAt}</li>
            </ul>
          </div>
          {/* 본인 게시글인 경우만  */}
          {loginId === userId && (
            <div>
              <PostBtn onClick={editPost}>수정</PostBtn>
              <PostBtn onClick={deletePost}>삭제</PostBtn>
            </div>
          )}
        </div>
      </PostHeadWrap>
    </div>
  );
}
