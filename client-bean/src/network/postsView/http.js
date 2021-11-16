import axios from 'axios';

const http = process.env.REACT_APP_HTTPURL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

//TODO GET /posts/post?post-id=postId
export const getPostInfo = async (postId) => {
  const res = await axios.get(`${http}/posts/post?post-id=${postId}`);
  return res.data;
};

//TODO Delete /posts
export const delPost = async (postId) => {
  const res = await axios.delete(`${http}/posts`, { data: { postId } });
  return res.data; // 204
};

//TODO POST /posts/comments
export const postComment = async (postId, comment) => {
  const res = await axios.get(`${http}/posts/comments`, { data: { postId, comment } });
  return res.data;
};

//TODO DELETE /posts/comments
export const delComment = async (postId, commentId) => {
  const res = await axios.delete(`${http}/posts/comments`, { data: { postId, commentId } });
  return res.data;
};

//TODO PUT /posts/comments
export const editPutComment = async (postId, commentId, editComment) => {
  const res = await axios.put(`${http}/posts/comments`, {
    data: { postId, commentId, editComment },
  });
  return res.data;
};
