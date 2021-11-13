import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

//모든포스트 가져오기
export const getMyInfos = () => {
  return axios.get(`${http}/my-page/my-info`, { 'Content-Type': 'application/json' });
};
