const { Todo } = require('../db/index');

const deleteAllCompletedTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.sendStatus(204);
  } catch (err) {
    res.senStatus(501);
    throw err;
  };
};

module.exports = deleteAllCompletedTodos;