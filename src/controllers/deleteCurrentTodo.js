const { ObjectId } = require('mongodb');
const { Todo } = require('../db/index');

const deleteCurrentTodo = async (req, res) => {
  try {
    const _id = req.params.todoId;
    console.log(_id)
    await Todo.deleteOne({ _id });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  };
};

module.exports = deleteCurrentTodo;