
const getActiveTodos  = async (req, res)=> {
  const collection = req.app.locals.collection;
  try{
    const todos = await collection.find({completed: false}).toArray();
    res.send(todos)
  }
  catch(err){
    res.sendStatus(500);
  }  
};

module.exports = getActiveTodos