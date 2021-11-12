import axios from 'axios';

axios.defaults.withCredentials = true;

const http = process.env.REACT_APP_HTTPURL;

// Login 요청
export function loginReq(userId, password) {
  return axios.post(`${http}/login`, { userId, password }, { 'Content-Type': 'application/json' });
}

// logout 요청
export function logoutReq() {
  return axios.get(`${http}/logout`, { 'Content-Type': 'application/json' });
}

export function signupReq(userId, password, email) {
  return axios.post(
    `${http}/signup`,
    { userId, password, email },
    { 'Content-Type': 'application/json' }
  );
}

export function checkIdReq(userId) {
  return axios.post(`${http}/signup/check-id`, { userId }, { 'Content-Type': 'application/json' });
}
