// routes/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Create a new task
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a specific task by ID
router.get('/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task by ID
router.put('/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task by ID
router.delete('/tasks/:taskId', async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
