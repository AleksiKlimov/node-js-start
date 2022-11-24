const objectId = require('mongodb');
const Todo = require('../todoModel');

const deleteCurrentTodo = async (req, res) => {
const id = new objectId.ObjectId(req.query._id);
try{
  const result = await Todo.findOneAndRemove({_id: id});
    if(result){ 
      res.json(result)
      // res.sendStatus(204)
    } else {
      res.sendStatus(404)
    };
} catch(err){
  res.sendStatus(500);
}
};

module.exports = deleteCurrentTodo