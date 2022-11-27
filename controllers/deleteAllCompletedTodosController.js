const Todo = require("../todoModel");

const deleteAllCompletedTodos = async (req, res) => {
    try {
        await Todo.deleteMany({ completed: true });
        // res.sendStatus(200);
    } catch (error) {
        res.senStatus(500);
    };
};

module.exports = deleteAllCompletedTodos;