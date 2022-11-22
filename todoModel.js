import mongoose from 'mongoose';
const { Schema, model } = mongoose;



const todoScheme = new Schema({
  title: String,
  completed: Boolean,
  id: String,
});
const Todo = model('Todo', todoScheme)
export default Todo