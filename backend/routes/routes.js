const express = require("express");

const router = express.Router();
const service = require("../services/service");
const controller = require("../controllers/controller");

// Page
router.get("/", service.homeRoute);
router.get("/test", service.testRoute);

// Get all tasks
router.get("/api/v1/tasks", controller.getTasks);
// Add Task
router.post("/api/v1/tasks", controller.addTasks);
// Update Task
router.put("/api/v1/tasks/:id", controller.updateTask);
// Delete Task
router.delete("/api/v1/tasks/:id", controller.deleteTask);

module.exports = router;
