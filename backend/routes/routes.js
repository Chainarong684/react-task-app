const express = require("express");
const service = require("../services/service");

const router = express.Router();

router.get("/", service.homeRoute);
router.get("/test", service.testRoute);

module.exports = router;
