const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/add-product', adminController.productAdd);
router.get('/products', adminController.productList);
router.get('/', adminController.index);

module.exports = router;
