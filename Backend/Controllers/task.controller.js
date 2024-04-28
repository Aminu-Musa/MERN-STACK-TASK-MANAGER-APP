const Task = require("../Models/task.model");


// CREATE TASK
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({
      ms: err.message,
    });
    console.log(err);
  }
};

// GET ALL TASKS
const readTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

module.exports = { createTask, readTask };
