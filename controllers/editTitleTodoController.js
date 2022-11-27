const { ObjectId } = require("mongodb");
const Todo = require("../todoModel");

const editTodoTitle = async (req, res) => {
    try {
        const { text } = req.params;
        const _id = new ObjectId(req.params.id);
        await Todo.updateOne({ _id }, { title: text });
        res.sendStatus(204);
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = editTodoTitle;