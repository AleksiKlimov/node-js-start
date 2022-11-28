const Todo = require('../db/index');

const getAllTodos = async (req, res) => {
  console.log(req.query)
  try {
    const filter = req.query.filter;
    if (filter === 'all') {
      const todos = await Todo.find();
      res.json(todos);
      return;
    }
    const flag = filter === 'completed';
    const todos = await Todo.find({ completed: flag });
    res.json(todos);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = getAllTodos;