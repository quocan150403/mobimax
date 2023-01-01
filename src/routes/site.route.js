const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/site.controller");

router.get("about", siteController.about);
router.get("cart", siteController.cart);
router.get("checkout", siteController.checkout);
router.get("contact", siteController.contact);
router.get("faq", siteController.faq);
router.get("shop", siteController.shop);
router.get("/", siteController.index);

module.exports = router;
