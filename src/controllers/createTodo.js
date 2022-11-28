const { Todo } = require('../db/index');

const createTodoElement = async (req, res) => {
  try {
    const { todoTitle } = req.body;
    const todo = await Todo.create({ title: todoTitle, completed: false });
    console.log(todo);
    await res.json(todo);
  } catch (err) {
    res.sendStatus(500);
  };
};

module.exports = createTodoElement;
