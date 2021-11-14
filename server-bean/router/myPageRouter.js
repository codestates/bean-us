const express = require('express');
const router = express.Router();
const controller = require('../controller/myPageController');

router.get('/my-info', controller.myInfo);
router.post('/email', controller.email);

module.exports = router;
