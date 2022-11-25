const express = require('express');
const controllers = require('./controllers/index')

const routes = express.Router();

routes.post('/todos', controllers.createTodoElement)

routes.get('/todos/:filter', controllers.getAllTodos);
// routes.get('/todos/active', controllers.getActiveTodos);
// routes.get('/todos/completed', controllers.getCompletedTodos);

routes.delete('/todos/:id', controllers.deleteCurrentTodo);

routes.patch('/todos/status/:id', controllers.editStatusTodo)
routes.patch('/todos/title/:id', controllers.editTodoTitle )
routes.patch('/todos/completed', controllers.installAllTodoCompleted)
module.exports = routes
