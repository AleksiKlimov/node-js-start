const { Todo } = require('../db/index');

const getAllTodos = async (req, res) => {
  console.log(req);
  try {
    const filter = req.query.filter;
    let findTodos = {};
    if (filter !== 'all') {
      findTodos = { completed: filter === 'completed' };
    };
    const todos = await Todo.find(findTodos);
    console.log(todos);
    res.json(todos);
  } catch (err) {
    res.sendStatus(400);
  };
};

module.exports = getAllTodos;