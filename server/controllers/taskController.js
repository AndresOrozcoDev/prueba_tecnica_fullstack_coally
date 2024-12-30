const Task = require("../models/task");
const { body, param, validationResult } = require("express-validator");

// Obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

// Crear una nueva tarea
exports.createTask = [
  body("title").notEmpty().withMessage("Title is required").trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description } = req.body;
      const newTask = new Task({ title, description });
      await newTask.save();
      res.status(201).json(newTask);
    } catch (err) {
      res
        .status(400)
        .json({ error: "Error creating task", details: err.message });
    }
  },
];

// Obtener tarea por ID
exports.getTaskById = [
  param("id").isMongoId().withMessage("Invalid task ID"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(task);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error fetching task", details: err.message });
    }
  },
];

// Actualizar una tarea por ID
exports.updateTask = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .trim()
    .escape(),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description cannot be empty")
    .trim()
    .escape(),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, description, completed },
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(updatedTask);
    } catch (err) {
      res
        .status(400)
        .json({ error: "Error updating task", details: err.message });
    }
  },
];

// Eliminar una tarea por ID
exports.deleteTask = [
  param("id").isMongoId().withMessage("Invalid task ID"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);
      if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Error deleting task", details: err.message });
    }
  },
];
