import axios from 'axios';

const https = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

//게시글 수정
export const putPosts = (postId, data) => {
  return axios.put(`${https}/posts`, {...data, postId})
}


export const createPosts = (data) => {
  return axios.post(`${https}/posts`, data)
}