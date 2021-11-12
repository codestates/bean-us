import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;

//TODO 모든 원두 가져오기
//* cookie에 담긴 accessToken을 기반으로 user를 알아내고, 해당 유저가 좋아하는(like) 표시된 사항을 보내주어야 한다.
export const getAllBeans = async () => {
  const res = await axios.get(`${http}/bean/all-beans`, { 'Content-Type': 'application/json' });
  return res.data;
};

//TODO 필터링 원두 가져오기
//request {fragrance: '', acidity: '3', sweetness: '2', bitterness: '', body: '4,5'}
export const getFilterBeans = async (data) => {
  const res = await axios.get(
    `${http}/bean/filter-beans`,
    { params: { ...data } },
    { 'Content-Type': 'application/json' }
  );
  return res.data;
};

//TODO 검색 원두 가져오기
// GET /bean/filter-beans?bean=${beanName}
// response {beanId,beanName,origin,fragrance,acidity,sweetness,bitterness,body,beanImage,desc,like,likeCount}
export const getBeanName = async (beanName) => {
  const res = await axios.get(`${http}/bean/filter-beans?bean=${beanName}`, {
    'Content-Type': 'application/json',
  });
  return res.data;
};

//TODO 원두관련 포스팅 가져오기
// GET /bean?beanId=beanId
// response [{postId, title, beans: [beanName, beanName, beanName], userId(작성자), createAt}]
export const getBeanPost = async (beanId) => {
  const res = await axios.get(`${http}/bean?bean-id=${beanId}`, {
    'Content-Type': 'application/json',
  });
  return res.data;
};

//TODO 원두 Like / Like 취소
// POST /bean/like
// response status 200 / 401
export const postBeanLike = async (beanId, beanLike) => {
  const res = await axios.post(
    `${http}/bean/like`,
    { beanId, beanLike },
    { 'Content-Type': 'application/json' }
  );
  console.log(res);
  return res.status;
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
