import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

//TODO 모든 원두 가져오기
//* cookie에 담긴 accessToken을 기반으로 user를 알아내고, 해당 유저가 좋아하는(like) 표시된 사항을 보내주어야 한다.
export const getAllBeans = () => {
  return axios.get(`${http}/bean/all-beans`, { 'Content-Type': 'application/json' }).then((res) => res.data);
};

//TODO 필터링 원두 가져오기
//request {fragrance: '', acidity: '3', sweetness: '2', bitterness: '', body: '4,5'}
export const getFilterBeans = (data) => {
  return axios.get(`${http}/bean/filter-beans`, { params: { ...data } }, { 'Content-Type': 'application/json' }).then((res) => res.data);
};

//TODO 검색 원두 가져오기
// GET /bean/filter-beans?bean=${beanName}
// response {beanId,beanName,origin,fragrance,acidity,sweetness,bitterness,body,beanImage,desc,like,likeCount}
export const getBeanName = (beanName) => {
  return axios.get(`${http}/bean/filter-beans?bean=${beanName}`, { 'Content-Type': 'application/json' }).then((res) => res.data);
};

//TODO 원두관련 포스팅 가져오기
// GET /bean?beanId=beanId
// response [{postId, title, beans: [beanName, beanName, beanName], userId(작성자), createAt}]
export const getBeanPost = (beanId) => {
  return axios.get(`${http}/bean?bean-id=${beanId}`, { 'Content-Type': 'application/json' }).then((res) => res.data);
};
