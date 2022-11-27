const { ObjectId } = require('mongodb');
const Todo = require('../todoModel');

const deleteCurrentTodo = async (req, res) => {
  try {
    const _id = new ObjectId(req.params.id);
    await Todo.deleteOne({ _id });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  };
};

module.exports = deleteCurrentTodo;