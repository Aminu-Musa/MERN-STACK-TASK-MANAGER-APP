const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../Controllers/task.controller");

// NOTE WE CAN ALSO STACK MULTIPLE METHODS
// router.route("/").post(createTask).get(getTasks)
// router.route("/:id").get(getTask).delete(deleteTask)
// router.route("/update/:id").put(updateTask).patch(updateTask)

// CREATES TASK
router.post("/", createTask);
// READ
router.get("/", getTasks);
router.get("/:id", getTask);

// DELETE
router.delete("/:id", deleteTask);

// UPDATE
router.put("/update/:id", updateTask);
router.patch("/update/:id", updateTask);

module.exports = router;
