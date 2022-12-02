const { Todo } = require('../db/index');

const updateTodo = async (req, res) => {
  try {
    const _id = req.params.todoId;
    const { titleText } = req.body.params;
    if (titleText) {
      await Todo.updateOne({ _id }, { title: titleText });
      return res.sendStatus(200)
    };
    const todo = await Todo.findOne({ _id });
    await Todo.updateOne({ _id }, { completed: !todo.completed });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
}

module.exports = updateTodo;