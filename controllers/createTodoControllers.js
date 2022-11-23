
const Todo = require('../todoModel');

const createTodoElement = async (req, res)=> {
  if(!req.body) {
    return res.sendStatus(400);
  }
  const todoTitle = req.body.title;
  const todoStatus = req.body.completed;
  const todo = new Todo( {title: todoTitle, completed :todoStatus});
  const collection = req.app.locals.collection;

  try{
    await collection.insertOne(todo);
    res.send(todo);
  } catch(err){
    console.log(err);
    res.sendStatus(500);
  };
};

module.exports = createTodoElement
