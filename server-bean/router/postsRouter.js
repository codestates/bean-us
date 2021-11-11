const controller = require('./../controller/postsController');
const express = require('express');
const router = express.Router();

router.get('/:id', controller.findById);
router.get('/', controller.findAll);
router.post('/', controller.createPost);
router.put('/', controller.updatePost);
router.delete('/', controller.deletePost);

module.exports = router;
