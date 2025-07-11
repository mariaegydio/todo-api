# To Do List API

API RESTful simples para gerenciamento de tarefas (To Do List), construída com Node.js e Express.

## Funcionalidades

- Criar nova tarefa  
- Listar todas as tarefas  
- Buscar tarefa por ID  
- Atualizar tarefa  
- Deletar tarefa  

## Tecnologias

- Node.js  
- Express  
- Body-parser (para lidar com JSON)  
- (Opcional: banco de dados, ex: MongoDB, SQLite, ou armazenamento em memória)  

## Endpoints

| Método | Rota           | Descrição                | Parâmetros/Corpo                   |
|--------|----------------|--------------------------|----------------------------------|
| GET    | /tasks         | Lista todas as tarefas   | Nenhum                          |
| GET    | /tasks/:id     | Busca tarefa por ID      | id: ID da tarefa (na URL)       |
| POST   | /tasks         | Cria uma nova tarefa     | JSON: `{ "title": "tarefa", "completed": false }` |
| PUT    | /tasks/:id     | Atualiza tarefa          | id: ID da tarefa (na URL) e JSON com dados para atualizar |
| DELETE | /tasks/:id     | Deleta uma tarefa        | id: ID da tarefa (na URL)       |

## Como rodar localmente

1. Clone o repositório:  
```bash
git clone https://github.com/mariaegydio/todo-api.git
