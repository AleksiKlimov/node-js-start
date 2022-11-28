const { Todo } = require('../db/index');

const deleteAllCompletedTodos = async (req, res) => {
    try {
        await Todo.deleteMany({ completed: true });
    } catch (error) {
        res.senStatus(500);
    };
};

module.exports = deleteAllCompletedTodos;