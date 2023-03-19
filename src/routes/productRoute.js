const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.post('/post-comment/:id', productController.postComment);
router.get('/:slug', productController.index);

module.exports = router;
