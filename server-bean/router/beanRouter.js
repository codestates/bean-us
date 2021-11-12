const controller = require('./../controller/beanController');
const express = require('express');
const router = express.Router();


router.get('/all-beans', controller.allBeans);
router.get('/filter-beans', controller.filterBeans);
router.get('/', controller.findBeanPost);

module.exports = router;
