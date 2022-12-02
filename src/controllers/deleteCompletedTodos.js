const { Todo } = require('../db/index');

const deleteAllCompletedTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.sendStatus(200);
  } catch (error) {
    res.senStatus(404);
  };
};

module.exports = deleteAllCompletedTodos;