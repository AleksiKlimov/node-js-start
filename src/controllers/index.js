
const deleteCurrentTodo = require('./deleteCurrentTodo');
const getAllTodos = require('./getTodos');
const createTodoElement = require('./createTodo');
const updateTodo = require('./updateTodo');
const changeAllTodosStatus = require('./changeAllTodosStatus')
const deleteAllCompletedTodos = require('./deleteAllCompletedTodos');

const controllers = {
  deleteCurrentTodo,
  getAllTodos,
  createTodoElement,
  updateTodo,
  changeAllTodosStatus,
  deleteAllCompletedTodos,
};

module.exports = controllers;