const controller = require('./../controller/beanController');
const express = require('express');
const router = express.Router();


router.get('/all-beans', controller.allBeans);

module.exports = router;
