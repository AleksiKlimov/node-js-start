const { Todo } = require('../db');

const changeAllTodosStatus = async (req, res) => {
  try {
    const { value } = req.body;
    await Todo.updateMany({}, { completed: value });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(501);
    throw err;
  };
};

module.exports = changeAllTodosStatus;
