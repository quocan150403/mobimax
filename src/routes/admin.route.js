const express = require("express");
const router = express.Router();

const adminController = require("../app/controllers/admin.controller");

router.get("/", adminController.index);

module.exports = router;
