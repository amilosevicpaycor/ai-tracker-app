const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory task storage
let tasks = [];
let nextId = 1;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Task title is required' });
  }
  
  const task = {
    id: nextId++,
    title: title.trim(),
    createdAt: new Date().toISOString()
  };
  
  tasks.push(task);
  res.status(201).json(task);
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Sample Tracker App running at http://localhost:${PORT}`);
});
