const express = require('express');
const controllers = require('./controllers');

const routes = express.Router();
const baseUrl = '/todos';
routes.post(baseUrl, controllers.createTodoElement);

routes.get(baseUrl, controllers.getTodos);

routes.patch(`${baseUrl}/completed`, controllers.changeAllTodosStatus);
routes.patch(`${baseUrl}/:todoId`, controllers.updateTodo);

routes.delete(`${baseUrl}/all`, controllers.deleteAllCompletedTodos);
routes.delete(`${baseUrl}/:todoId`, controllers.deleteCurrentTodo);

module.exports = routes;
