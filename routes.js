const express = require('express');
const controllers = require('./controllers/index')

const routes = express.Router();

routes.post('/todos', controllers.createTodoElement)

routes.get('/todos/:filter', controllers.getAllTodos);

routes.patch('/todos/status/:id', controllers.editStatusTodo)
routes.patch('/todos/title/:id/:text', controllers.editTodoTitle)
routes.patch('/todos/completed', controllers.installAllTodoCompleted)

routes.delete('/todos', controllers.deleteAllCompletedTodos);
routes.delete('/todos/:id/', controllers.deleteCurrentTodo);

module.exports = routes
