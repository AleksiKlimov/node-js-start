const express = require('express');
const controllers = require('./controllers');

const routes = express.Router();

routes.post('/', controllers.createTodoElement);

routes.get('/', controllers.getAllTodos);

routes.patch('/completed', controllers.changeAllTodosStatus);
routes.patch('/:todoId/', controllers.updateTodo);

routes.delete('/all', controllers.deleteAllCompletedTodos);
routes.delete('/:todoId', controllers.deleteCurrentTodo);

module.exports = routes;
