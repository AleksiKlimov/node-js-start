const  mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoScheme = new Schema({
  title: String,
  completed: Boolean,
  id: String,
});
const Todo = model('Todo', todoScheme)

module.exports = Todo