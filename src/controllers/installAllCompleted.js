
const Todo = require('../db/index');

const installAllTodosCompleted = async (req, res) => {
  try {
    await Todo.updateMany({}, { completed: true });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = installAllTodosCompleted;
