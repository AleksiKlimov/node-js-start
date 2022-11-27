const { ObjectId } = require('mongodb');
const Todo = require('../todoModel');

const editStatusTodo = async (req, res) => {
  try {
    const _id = new ObjectId(req.params.id);
    const todo = await Todo.findOne({ _id });
    await Todo.updateOne({ _id }, { completed: !todo.completed });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  };
};

module.exports = editStatusTodo;