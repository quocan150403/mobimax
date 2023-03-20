const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/wishlist', siteController.wishlist);
router.get('/orders', siteController.orders);
router.get('/order', siteController.order);
router.get('/about', siteController.about);
router.get('/contact', siteController.contact);
router.get('/cart', siteController.cart);
router.get('/checkout', siteController.checkout);
router.get('/register', siteController.register);
router.get('/login', siteController.login);
router.get('/faq', siteController.faq);
router.get('/', siteController.index);

module.exports = router;
