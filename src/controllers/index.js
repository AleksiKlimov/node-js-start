
const deleteCurrentTodo = require('./deleteCurrentTodo');
const getAllTodos = require('./getTodos');
const createTodoElement = require('./createTodo');
const updateTodo = require('./updateTodo');
const changeAllTodosStatus = require('./changeTodosStatus')
const deleteAllCompletedTodos = require('./deleteCompletedTodos');

const controllers = {
  deleteCurrentTodo,
  getAllTodos,
  createTodoElement,
  updateTodo,
  changeAllTodosStatus,
  deleteAllCompletedTodos,
};

module.exports = controllers;