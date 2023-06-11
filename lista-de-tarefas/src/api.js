const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let tasks = [];

// Rota para obter todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Rota para excluir uma tarefa
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
