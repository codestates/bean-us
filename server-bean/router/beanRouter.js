const express = require('express');
const router = express.Router();
const controller = require('./../controller/beanController');

router.get('/all-beans', controller.allBeans);
router.get('/filter-beans', controller.filterBeans);
router.get('/', controller.findBeanPost);
router.post('/like', controller.beanLike);

module.exports = router;
