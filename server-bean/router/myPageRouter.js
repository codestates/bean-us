const express = require('express');
const router = express.Router();
const controller = require('./../controller/myPageController');

router.get('/my-info', controller.myInfo);
router.get('/my-beans', controller.myBeans);
router.get('/my-posts', controller.myPosts);

module.exports = router;
