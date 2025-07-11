const express = require('express');

const app = express();

app.use(express.json());

const tarefas = [];
let idAtual = 1;

app.get('/tarefas', (req, res) => {
    res.json('tarefas');
});

app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;

    if (!titulo) {
        return res.status(400).json({ error: 'Título é obrigatório' });
    }

    const novaTarefa = {
        id: idAtual++,
        titulo,
        concluida: false
    }

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

app.patch('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, concluida } = req.body;

  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  if (titulo !== undefined) {
    tarefa.titulo = titulo;
  }

  if (concluida !== undefined) {
    tarefa.concluida = concluida;
  }

  res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' }); 
  }

    tarefas.splice(index, 1);

    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");  
})