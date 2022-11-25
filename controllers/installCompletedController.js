
const Todo = require('../todoModel');

const installAllTodoCompleted = async (req, res) =>{
  try{
    
    await Todo.updateMany({}, {completed: true });
    res.sendStatus(204);
  } catch(err){
    res.sendStatus(500);
  }
}

module.exports = installAllTodoCompleted;