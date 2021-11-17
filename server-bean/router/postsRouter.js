const express = require('express');
const router = express.Router();
const post = require('./../controller/postsController');
const bean = require('./../controller/beanController');

router.get('/all-posts', post.findAllPost);
router.get('/getPost', post.findByPostId);
router.get('/', post.findByParams);
router.get('/post', post.findPostByPostId);
router.post('/', post.createPost);
router.put('/', post.updatePost);
router.delete('/', post.deletePost);

router.post('/comments', post.createPostComment);
router.put('/comments', post.updatePostComment);
router.delete('/comments', post.deletePostComment);

router.get('/getBeans', bean.beanForPost);

router.post('/imageUpload', post.imageUpload);

module.exports = router;
