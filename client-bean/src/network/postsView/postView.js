import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

//TODO GET /post?post-id=postId
// 게시물 내용 가져오기
export const getPostInfo = async (postId) => {
  const res = await axios.get(`${http}/post?post-id=${postId}`, {
    'Content-Type': 'application/json',
  });
  return res.data;
};
