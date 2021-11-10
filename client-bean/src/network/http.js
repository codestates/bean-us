import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

//TODO REST API 추가 필요
//* cookie에 담긴 accessToken을 기반으로 user를 알아내고, 해당 유저가 좋아하는(like) 표시된 사항을 보내주어야 한다.
export function getAllBeans() {
  return axios.get(`${http}/bean/all-beans`, { 'Content-Type': 'application/json', withCredentials: true });
}

//TODO REST API 추가 필요
//* data 모양 { fragrance: [2,3], acidity: [3], sweetness: [2,4], bitterness: [], body: [] }
//* 배열이 빈배열일 경우는 해당 구분은 모두 선택된 것과 동일하다.
//* 즉, 해당 구분에 대해서는 모든 원두를 제공해준다.

export function getFilterBeans(data) {
  return axios.get(`${http}/bean/filter-beans`, { params: { ...data } }, { 'Content-Type': 'application/json', withCredentials: true });
}

//TODO REST API 추가 필요
//  { params: { ...data } } 처럼 통일하는 것이 좋은가??
export function getBeanName(beanName) {
  return axios.get(`${http}/bean/filter-beans?bean=${beanName}`, { 'Content-Type': 'application/json', withCredentials: true });
}
