const express = require("express");
const router = express.Router();
const { createTask, readTask } = require("../Controllers/task.controller");

// CREATES TASK
router.post("/api/tasks", createTask);
// READ
router.get("/api/tasks", readTask);

module.exports = router;
