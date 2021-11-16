import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// 나의 정보 가져 오기
export const getMyInfos = () => {
  return axios.get(`${http}/my-page/my-info`);
};

// 내가 좋아요를 누른 원두 목록 가져 오기
export const getMyBeans = () => {
  return axios.get(`${http}/my-page/my-beans`);
};

export const getMyPosts = () => {
  return axios.get(`${http}/my-page/my-posts`);
};

export const editMyEmail = (userId, email) => {
  return axios.put(`${http}/my-page/email`, { userId, email });
};

export const passwordChange = (userId, curPwd, newPwd) => {
  return axios.put(`${http}/my-page/password-change`, { userId, curPwd, newPwd });
};

export const withdrawUser = (userId, password) => {
  return axios.delete(`${http}/my-page/withdrawal`, { data: { userId, password } });
};

export const withdrawOAuthUser = (userId, social) => {
  console.log(userId, social);
  return axios.delete(`${http}/my-page/withdrawal-oauth`, { data: { userId, social } });
};
