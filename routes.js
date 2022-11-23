const express = require('express');

const deleteCurrentTodo = require('./controllers/deleteCurrentTodoController');
const getAllTodos = require('./controllers/getAllTodoController');
const createTodoElement = require('./controllers/createTodoControllers');
const editStatusTodo = require('./controllers/editStatusTodoController');
const getActiveTodos = require('./controllers/getActiveTodosController');
const getCompletedTodos = require('./controllers/getCompletedTodoControllers');
const editTodoTitle = require('./controllers/editTitleTodoController');

const routes = express.Router();

routes.post('/todos', createTodoElement)
routes.patch('/todos/title/:id', editTodoTitle )

routes.get('/todos', getAllTodos);
routes.get('/todos/active', getActiveTodos);
routes.get('/todos/completed', getCompletedTodos);
routes.delete('/todos/:id', deleteCurrentTodo);
routes.patch('/todos/completed/:id', editStatusTodo)
module.exports = routes
