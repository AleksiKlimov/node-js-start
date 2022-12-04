const { Todo } = require('../db/index');

const getTodos = async (req, res) => {
  try {
    const filter = req.query.filterValue;
    let findTodos = {};
    if (filter !== 'all') {
      findTodos = { completed: filter === 'completed' };
    };
    const todos = await Todo.find(findTodos);
    res.json(todos);
  } catch (err) {
    res.sendStatus(500);
    throw err;
  };
};

module.exports = getTodos;