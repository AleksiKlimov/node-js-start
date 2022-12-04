const { Todo } = require('../db/index');

const updateTodo = async (req, res) => {
  try {
    const _id = req.params.todoId;
    const { todoText, isCompleted } = req.body;
    await Todo.updateOne({ _id }, { title: todoText, completed: isCompleted });
    return res.sendStatus(200)
  } catch (err) {
    res.sendStatus(500);
    throw err;
  }
};

module.exports = updateTodo;