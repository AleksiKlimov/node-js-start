const { ObjectId } = require('mongodb');
const { Todo } = require('../db/index');

const deleteCurrentTodo = async (req, res) => {
  try {
    const _id = req.params.todoId;
    await Todo.deleteOne({ _id });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(501);
    throw err;
  };
};

module.exports = deleteCurrentTodo;