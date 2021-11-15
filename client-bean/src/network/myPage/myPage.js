import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

// 나의 정보 가져 오기
export const getMyInfos = () => {
  return axios.get(`${http}/my-page/my-info`, { headers: { 'Content-Type': 'application/json' } });
};

// 내가 좋아요를 누른 원두 목록 가져 오기
export const getMyBeans = () => {
  return axios.get(`${http}/my-page/my-beans`, { headers: { 'Content-Type': 'application/json' } });
};

export const getMyPosts = () => {
  return axios.get(`${http}/my-page/my-posts`, { headers: { 'Content-Type': 'application/json' } });
};

export const editMyEmail = (userId, email) => {
  return axios.put(
    `${http}/my-page/email`,
    { userId, email },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const passwordChange = (userId, curPwd, newPwd) => {
  return axios.put(
    `${http}/my-page/password-change`,
    { userId, curPwd, newPwd },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const withdrawUser = (userId, password) => {
  return axios.delete(
    `${http}/my-page/withdrawal`,
    { data: { userId, password } },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const withdrawOAuthUser = (userId, social) => {
  console.log(userId, social);
  return axios.delete(
    `${http}/my-page/withdrawal-oauth`,
    { data: { userId, social } },
    { headers: { 'Content-Type': 'application/json' } }
  );
};
