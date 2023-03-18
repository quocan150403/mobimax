const express = require('express');
const router = express.Router();

const shopController = require('../app/controllers/ShopController');
router.get('/category/:slug', shopController.category);
router.get('/brand/:slug', shopController.brand);
router.get('/', shopController.index);

module.exports = router;
