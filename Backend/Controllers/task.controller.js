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
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

// GET SINGLE TASK
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json(`No task with id: ${id} found`);
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task)
      return res
        .status(404)
        .json({ status: 404, msg: "Task id not found on Database" });

    res.status(200).json(`Task with id: ${id} has been deleted`);
  } catch (error) {
    res.status(500).json({ msg: err.message });
  }
};

// UPDATE TASK

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ status: 404, statusText: `No task with id: ${id} was found` });
    }
    res
      .status(200)
      .json({ status: 200, statusText: "successfull", data: task });
  } catch (err) {
    res.status(500).json({ status: 500, msg: err.message });
  }
};

module.exports = { createTask, getTasks, getTask, deleteTask, updateTask };
