import axios from 'axios';

const https = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

//모든포스트 가져오기
const createPosts = (data) => {
  return axios.post(`${https}/posts/all-posts`, { 'Content-Type': 'application/json' }, data).then((res) => res.data);
}

export default createPosts;