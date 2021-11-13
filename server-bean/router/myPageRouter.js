const express = require('express');
const router = express.Router();
const controller = require('../controller/myPageController');

router.get('/my-info', controller.myInfo);

module.exports = router;
