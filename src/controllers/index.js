
const deleteCurrentTodo = require('./deleteTodo');
const getTodos = require('./getTodos');
const createTodoElement = require('./createTodo');
const updateTodo = require('./updateTodo');
const changeAllTodosStatus = require('./changeTodosStatus')
const deleteAllCompletedTodos = require('./deleteCompletedTodos');

const controllers = {
  deleteCurrentTodo,
  getTodos,
  createTodoElement,
  updateTodo,
  changeAllTodosStatus,
  deleteAllCompletedTodos,
};

module.exports = controllers;