const express = require('express');
const router = express.Router();
const controller = require('./../controller/postsController');

router.get('/all-posts', controller.findAll);
router.get('/:postId', controller.findById);
router.get('/', controller.findByParams);
router.post('/', controller.createPost);
router.put('/', controller.updatePost);
router.delete('/:postId', controller.deletePost);

router.post('/comments', controller.createPostComment);
router.put('/comments/:commentId', controller.updatePostComment);
router.delete('/comments/:commentId', controller.deletePostComment);
router.get('/comments/:commentId', controller.findPostCommentByPostId);

module.exports = router;
