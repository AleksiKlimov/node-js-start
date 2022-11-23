
const getCompletedTodos  = async (req, res)=> {
  const collection = req.app.locals.collection;
  try{
    const todos = await collection.find({completed: true}).toArray();
    res.send(todos)
  }
  catch(err){
    res.sendStatus(500);
  }  
};

module.exports = getCompletedTodos
