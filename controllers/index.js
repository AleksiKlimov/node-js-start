
const deleteCurrentTodo = require('./deleteCurrentTodoController');
const getAllTodos = require('./getAllTodoController');
const createTodoElement = require('./createTodoController');
const editStatusTodo = require('./editStatusTodoController');
const getActiveTodos = require('./getActiveTodosController');
const getCompletedTodos = require('./getCompletedTodoControllers');
const editTodoTitle = require('./editTitleTodoController');

const controllers = {
  deleteCurrentTodo,
  getAllTodos,
  createTodoElement,
  editStatusTodo,
  getActiveTodos,
  getCompletedTodos,
  editTodoTitle,
}

module.exports = controllers;