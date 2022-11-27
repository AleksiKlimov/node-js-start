
const deleteCurrentTodo = require('./deleteCurrentTodoController');
const getAllTodos = require('./getTodosController');
const createTodoElement = require('./createTodoController');
const editStatusTodo = require('./editStatusTodoController');
const editTodoTitle = require('./editTitleTodoController');
const installAllTodoCompleted = require('./installAllCompletedsController')
const deleteAllCompletedTodos = require('./deleteAllCompletedTodosController');

const controllers = {
  deleteCurrentTodo,
  getAllTodos,
  createTodoElement,
  editStatusTodo,
  editTodoTitle,
  installAllTodoCompleted,
  deleteAllCompletedTodos,
}

module.exports = controllers;