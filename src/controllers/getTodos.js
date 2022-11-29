const { Todo } = require('../db/index');

const getAllTodos = async (req, res) => {
  try {
      const filter = req.query.filter;
      let findTodos = {};
      if (filter !== 'all') {
        findTodos = {completed: filter === 'completed'};
      };
    const todos = await Todo.find( findTodos );
    res.json(todos);
  } catch (err) {
    res.sendStatus(400);
  };
};

module.exports = getAllTodos;