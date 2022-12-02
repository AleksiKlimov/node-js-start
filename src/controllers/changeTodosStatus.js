
const { Todo } = require('../db');

const changeAllTodosStatus = async (req, res) => {
  try {
    const { flag } = req.body.params;
    await Todo.updateMany({}, { completed: flag});
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  };
};

module.exports = changeAllTodosStatus;
