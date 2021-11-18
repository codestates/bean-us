import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const http = process.env.REACT_APP_HTTPURL;

// Login 요청
export function loginReq(userId, password) {
  return axios.post(`${http}/login`, { userId, password });
}

// logout 요청
export function logoutReq() {
  return axios.get(`${http}/logout`, {
    crossDomain: true,
  });
}

export function signupReq(userId, password, email) {
  return axios.post(`${http}/signup`, { userId, password, email });
}

export function checkIdReq(userId) {
  return axios.post(`${http}/signup/check-id`, { userId });
}
