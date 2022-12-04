const { Todo } = require('../db/index');

const createTodoElement = async (req, res) => {
  try {
    const { todoTitle, todoStatus } = req.body;
    const todo = await Todo.create({ title: todoTitle, completed: todoStatus });
    res.status(200).json(todo);
  } catch (err) {
    res.sendStatus(400);
    throw err;
  };
};

module.exports = createTodoElement;
