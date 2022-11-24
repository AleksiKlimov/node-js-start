const express = require('express');
const controllers = require('./controllers/index')

const routes = express.Router();

routes.post('/todos', controllers.createTodoElement)
routes.patch('/todos/title/:id', controllers.editTodoTitle )
routes.get('/todos', controllers.getAllTodos);
routes.get('/todos/active', controllers.getActiveTodos);
routes.get('/todos/completed', controllers.getCompletedTodos);
routes.delete('/todos/:id', controllers.deleteCurrentTodo);
routes.patch('/todos/completed/:id', controllers.editStatusTodo)

module.exports = routes
