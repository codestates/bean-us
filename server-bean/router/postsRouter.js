const controller = require('./../controller/postsController');
const express = require('express');
const router = express.Router();

router.get('/all-posts', controller.findAll);
router.get('/:postId', controller.findById);
router.get('/', controller.findByParams);
router.post('/', controller.createPost);
router.put('/', controller.updatePost);
router.delete('/:postId', controller.deletePost);

module.exports = router;
