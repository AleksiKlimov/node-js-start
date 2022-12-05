const express = require('express');
const controllers = require('./controllers');

const routes = express.Router();
routes.post('/todos', controllers.createTodoElement);

routes.get('/todos', controllers.getTodos);

routes.patch('/todos/completed', controllers.changeAllTodosStatus);
routes.patch('todos/:todoId', controllers.updateTodo);

routes.delete('todos/all', controllers.deleteAllCompletedTodos);
routes.delete('todos/:todoId', controllers.deleteCurrentTodo);

module.exports = routes;
