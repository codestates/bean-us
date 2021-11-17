import axios from 'axios';

const https = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

//게시글 생성
export const createPosts = (data) => {
  return axios.post(`${https}/posts`, data);
};
//게시글 수정
export const rewritePost = (data) => {
  return axios.get(`${https}/posts/getPost?postId=${data}`).then((res) => res.data);
};

//원두 불러오기
export const getBeans = () => {
  return axios.get(`${https}/posts/getBeans`).then((res) => res.data);
};
