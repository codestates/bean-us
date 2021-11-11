import axios from 'axios';

axios.defaults.withCredentials = true;

const http = process.env.REACT_APP_HTTPURL;

// Login 요청
export function loginReq(userId, password) {
  console.log(http);
  return axios.post(`${http}/login`, { userId, password }, { 'Content-Type': 'application/json' });
}
