import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

//모든포스트 가져오기
const getAllPosts = () => {
  return axios
    .get(`${http}/posts/all-posts`, { 'Content-Type': 'application/json' })
    .then((res) => res.data);
};

//검색포스트 가져오기
export const getFilterdPost = (postName) => {
  return axios
    .get(`${http}/posts?title=${postName}`, { 'Content-Type': 'application/json' })
    .then((res) => res.data);
};

export default getAllPosts;
