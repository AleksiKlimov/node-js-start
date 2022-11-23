const objectId = require('mongodb')

const deleteCurrentTodo = async (req, res) => {
const collection = req.app.locals.collection
const id = new objectId.ObjectId(req.params.id);
try{
  const result = await collection.findOneAndDelete({_id: id});
  const todo = result.value;
    if(todo){ 
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    };
} catch(err){
  res.sendStatus(500);
}
};

module.exports = deleteCurrentTodo