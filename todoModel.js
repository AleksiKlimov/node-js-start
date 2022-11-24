const  mongoose = require('mongoose');

const { Schema, model } = mongoose;

const todoScheme = new Schema({
  title: {type: String, required: true},
  completed: {type: Boolean, required: true},
},{ versionKey: false });
const Todo = model('Todo', todoScheme)

module.exports = Todo