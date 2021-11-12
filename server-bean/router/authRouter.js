const express = require('express');
const router = express.Router();
const controller = require('./../controller/authController');

router.get('/kakao', controller.kakao);
router.get('/kakao-callback', controller.kakaoCallback);

module.exports = router;
