
const Todo = require('../todoModel');

const createTodoElement = async (req, res)=> {
  if(!req.body.todoTitle) {
    return res.sendStatus(400);
  }
  const { todoTitle } = req.body;
  try{
    const todo = await Todo.create({title: todoTitle, completed: false});
    await res.json(todo)
  } catch(err){
    console.log(err);
    res.sendStatus(500);
  };
};

module.exports = createTodoElement;
