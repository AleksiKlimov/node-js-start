
const deleteCurrentTodo = require('./deleteCurrentTodo');
const getAllTodos = require('./getTodos');
const createTodoElement = require('./createTodo');
const editStatusTodo = require('./editStatusTodo');
const editTodoTitle = require('./editTitleTodo');
const installAllTodoCompleted = require('./installAllCompleted')
const deleteAllCompletedTodos = require('./deleteAllCompletedTodos');

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