import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const http = process.env.REACT_APP_HTTPURL;

export function checkToken() {
  return axios.get(`${http}/check-token`);
}
