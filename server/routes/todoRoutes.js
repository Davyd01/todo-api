const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении задач' });
  }
});

router.post('/todos', async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      completed: req.body.completed || false,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании задачи' });
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Задача удалена' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении задачи' });
  }
});

module.exports = router;
