const express = require("express");

const router = express.Router();
const service = require("../services/service");
const controller = require("../controllers/controller");

router.get("/", service.homeRoute);
router.get("/test", service.testRoute);

// Get all tasks
router.get("/api/v1/tasks", controller.fetchAllTasks);
router.post("/api/v1/tasks", controller.addTasks);

module.exports = router;
