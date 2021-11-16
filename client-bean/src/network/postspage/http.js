import axios from 'axios';

const https = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

//모든포스트 가져오기
export const getAllPosts = () => {
  return axios.get(`${https}/posts/all-posts`).then((res) => res.data);
}

//검색포스트 가져오기
export const getFilterdPost =  async (postName) => {
  const res = await axios.get(`${https}/posts?title=${postName}`)
  return res.data;
}

// user 포스트 가져오기
export const getUserPost = async (userId) => {
  const res = await axios.get(`${https}/posts?userId=${userId}`)
  return res.data;
}

