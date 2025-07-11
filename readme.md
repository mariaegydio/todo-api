# To Do List API - Node.js + Express

API simples para gerenciamento de tarefas (To Do List) utilizando Node.js e Express, armazenando os dados em memória.

---

## Funcionalidades

- Listar todas as tarefas  
- Criar nova tarefa  
- Atualizar tarefa parcialmente (título e status de conclusão)  
- Deletar tarefa por ID  

---

## Endpoints

| Método  | Rota           | Descrição                      | Corpo (JSON) / Parâmetros                      |
|---------|----------------|--------------------------------|-----------------------------------------------|
| GET     | `/tarefas`     | Lista todas as tarefas          | -                                             |
| POST    | `/tarefas`     | Cria uma nova tarefa            | `{ "titulo": "Nome da tarefa" }`              |
| PATCH   | `/tarefas/:id` | Atualiza título e/ou conclusão  | `{ "titulo": "Novo título", "concluida": true/false }` (qualquer um pode ser omitido) |
| DELETE  | `/tarefas/:id` | Deleta uma tarefa pelo ID       | `id` via URL                                  |


