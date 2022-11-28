
const deleteCurrentTodo = require('./deleteCurrentTodo');
const getAllTodos = require('./getTodos');
const createTodoElement = require('./createTodo');
const editTodo = require('./editTodo');
const installAllTodoCompleted = require('./installAllCompleted')
const deleteAllCompletedTodos = require('./deleteAllCompletedTodos');

const controllers = {
  deleteCurrentTodo,
  getAllTodos,
  createTodoElement,
  editTodo,
  installAllTodoCompleted,
  deleteAllCompletedTodos,
}

module.exports = controllers;