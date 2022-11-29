const { Todo } = require('../db/index');

const createTodoElement = async (req, res) => {
  try {
    const { todoTitle } = req.body;
    const todo = await Todo.create({ title: todoTitle, completed: false });
    await res.json(todo);
  } catch (err) {
    res.sendStatus(400);
  };
};

module.exports = createTodoElement;
