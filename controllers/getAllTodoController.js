const Todo = require("../todoModel");

const getAllTodos  = async (req, res)=> {
const collection = req.app.locals.collection;

try{
const todos = await Todo.find({}).toArray();
res.json(todos);
}
catch(err){
console.log(err);
res.sendStatus(500);
}  
};

module.exports = getAllTodos