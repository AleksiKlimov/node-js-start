
const getAllTodos  = async (req, res)=> {
const collection = req.app.locals.collection;
try{
const todos = await collection.find({}).toArray();
res.send(todos);
}
catch(err){
console.log(err);
res.sendStatus(500);
}  
};

module.exports = getAllTodos