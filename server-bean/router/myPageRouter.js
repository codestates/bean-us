const express = require('express');
const router = express.Router();

const controller = require('./../controller/myPageController');

router.get('/my-info', controller.myInfo);
router.get('/my-beans', controller.myBeans);
router.get('/my-posts', controller.myPosts);
router.put('/email', controller.email);
router.put('/password-change', controller.passwordChange);
router.delete('/withdrawal', controller.withdrawal);
router.delete('/withdrawal-oauth', controller.withdrawalOAuth);

module.exports = router;
