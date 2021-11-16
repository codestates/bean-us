import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

//TODO 모든 원두 가져오기
export const getAllBeans = async () => {
  const res = await axios.get(`${http}/bean/all-beans`);
  return res.data.beanList;
};

//TODO 필터링 원두 가져오기
export const getFilterBeans = async (data) => {
  const res = await axios.get(`${http}/bean/filter-beans`, { params: { ...data } });
  return res.data;
};

//TODO 검색 원두 가져오기
export const getBeanName = async (beanName) => {
  const res = await axios.get(`${http}/bean/filter-beans?bean=${beanName}`);
  return res.data;
};

//TODO 원두관련 포스팅 가져오기
export const getBeanPost = async (beanId) => {
  const res = await axios.get(`${http}/bean?bean-id=${beanId}`);
  return res.data.posts;
};

//TODO 원두 Like / Like 취소
export const postBeanLike = async (beanId, beanLike) => {
  try {
    const res = await axios.post(`${http}/bean/like`, { data: { beanId, beanLike } });
    return res.status;
  } catch (err) {
    console.log(err);
  }
};

export const statusCode = (code) => {
  if (code === 401) {
    //* 로그인상태에서 401을 받는다면
    return '로그인이 만료되었습니다. 다시 로그인해 주세요';
  }

  if (code === 200) {
    return 200;
  }
};
