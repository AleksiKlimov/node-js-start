
const deleteCurrentTodo = require('./deleteCurrentTodoController');
const getAllTodos = require('./getAllTodoController');
const createTodoElement = require('./createTodoController');
const editStatusTodo = require('./editStatusTodoController');
const getActiveTodos = require('./getActiveTodosController');
const getCompletedTodos = require('./getCompletedTodoController');
const editTodoTitle = require('./editTitleTodoController');
const installAllTodoCompleted = require('./installCompletedController')
const controllers = {
  deleteCurrentTodo,
  getAllTodos,
  createTodoElement,
  editStatusTodo,
  getActiveTodos,
  getCompletedTodos,
  editTodoTitle,
  installAllTodoCompleted,
}

module.exports = controllers;