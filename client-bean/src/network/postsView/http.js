import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;
axios.defaults.withCredentials = true;

//TODO GET /posts?post-id=postId
// 게시물 내용 가져오기
export const getPostInfo = async (postId) => {
  const res = await axios.get(`${http}/post?post-id=${postId}`, {
    'Content-Type': 'application/json',
  });
  return res.data;
};

//TODO POST /posts/comments
// 게시물 댓글 추가 (최신순 정렬)
// userId 필요???
export const postComment = async (postId, comment) => {
  const res = await axios.get(
    `${http}/posts/comments`,
    { postId, comment },
    {
      'Content-Type': 'application/json',
    }
  );
  return res.data;
};
