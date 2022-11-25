const Todo = require("../todoModel");

const getAllTodos  = async (req, res)=> {
  console.log(req.params.filter)
  try{
    const filter = req.params.filter
    if(filter === 'all'){
      const todos = await Todo.find({});
      res.json(todos);
      return;
    }
    const flag = filter === 'completed';
    const todos = await Todo.find({completed: flag});
    res.json(todos);
    return;
  }
  catch(err){
    console.log(err);
    res.sendStatus(500);
}
};

module.exports = getAllTodos;