const { ObjectId } = require('mongodb');
const { Todo } = require('../db/index');

const deleteCurrentTodo = async (req, res) => {
  try {
    const _id = req.params.todoId;
    await Todo.deleteOne({ _id });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  };
};

module.exports = deleteCurrentTodo;