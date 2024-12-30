const Task = require('../models/task');

// Obtener todas las tareas
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: 'Error creating task', details: err.message });
    }
};

// Actualizar una tarea por ID
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true } // Return the updated document
        );
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: 'Error updating task', details: err.message });
    }
};

// Eliminar una tarea por ID
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting task', details: err.message });
    }
};
