
const Todo = require('../todoModel');

const createTodoElement = async (req, res)=> {
  if(!req.body) {
    return res.sendStatus(400);
  }

  const { todoTitle } = req.body;
  // const collection = req.app.locals.collection;

  try{
    // await collection.insertOne(todo);
    const todo = Todo.create({title: todoTitle, completed: false});
    // return res.json(todo);
  } catch(err){
    console.log(err);
    res.sendStatus(500);
  };
};

module.exports = createTodoElement;
