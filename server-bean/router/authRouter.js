const express = require('express');
const router = express.Router();
const controller = require('./../controller/authController');

router.get('/kakao', controller.kakao);
router.get('/kakao-callback', controller.kakaoCallback);
router.get('/github', controller.github);
router.get('/github-callback', controller.githubCallback);

module.exports = router;
