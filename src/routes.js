const express = require('express');
const controllers = require('./controllers')

const routes = express.Router();

routes.post('/', controllers.createTodoElement)

routes.get('/', controllers.getAllTodos);

routes.patch('/completed', controllers.installAllTodoCompleted)
routes.patch('/:todoId', controllers.editStatusTodo)

routes.delete('/all', controllers.deleteAllCompletedTodos);
routes.delete('/:todoId', controllers.deleteCurrentTodo);

module.exports = routes
