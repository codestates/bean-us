import axios from 'axios';

// const http = process.env.REACT_APP_HTTPSURL;
const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

//TODO GET /posts?post-id=postId
// 게시물 내용 가져오기
export const getPostInfo = async (postId) => {
  const res = await axios.get(`${http}/posts?post-id=${postId}`);
  return res.data;
};

//TODO Delete /posts
// 게시물 삭제
// 응답 : 204 성공
export const delPost = async (postId) => {
  const res = await axios.delete(`${http}/posts`, { data: { postId } });
  return res.data; // 204
};

//TODO POST /posts/comments
// 게시물 댓글 추가 (최신순 정렬)
// userId 필요???
// response => 새로 생성된 댓글{ userId: 'userId',commentId: 1, comment: 'new 내용댓글 내용',createAt: '2020-12-20'}
export const postComment = async (postId, comment) => {
  const res = await axios.get(`${http}/posts/comments`, { data: { postId, comment } });
  return res.data;
};

//TODO DELETE /posts/comments
// 게시물 댓글 삭제
// response => null
export const delComment = async (postId, commentId) => {
  const res = await axios.delete(`${http}/posts/comments`, { data: { postId, commentId } });
  return res.data;
};

//TODO PUT /posts/comments
// 게시물 댓글 수정
// response => null
export const editPutComment = async (postId, commentId, editComment) => {
  const res = await axios.put(`${http}/posts/comments`, {
    data: { postId, commentId, editComment },
  });
  return res.data;
};
