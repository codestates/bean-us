import axios from 'axios';

axios.defaults.withCredentials = true;

const http = process.env.REACT_APP_HTTPURL;

// Login 요청
export function loginReq(userId, password) {
  return axios.post(
    `${http}/login`,
    { userId, password },
    { headers: { 'Content-Type': 'application/json' }, crossDomain: true }
  );
}

// logout 요청
export function logoutReq() {
  return axios.get(`${http}/logout`, {
    headers: { 'Content-Type': 'application/json' },
    crossDomain: true,
  });
}

export function signupReq(userId, password, email) {
  return axios.post(
    `${http}/signup`,
    { userId, password, email },
    { headers: { 'Content-Type': 'application/json' } }
  );
}

export function checkIdReq(userId) {
  return axios.post(
    `${http}/signup/check-id`,
    { userId },
    { headers: { 'Content-Type': 'application/json' }, crossDmain: true }
  );
}
