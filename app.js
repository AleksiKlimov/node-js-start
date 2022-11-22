
import Todo from './todoModel.js';
import  express from 'express';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb'
const app = express();
const jsonParser = express.json();




  //  console.log("schemaaaaaaaaaaaa", Todo)s
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
  
// app.use(express.static(`${__dirname}/public`));
  
(async () => {
     try {
        await mongoClient.connect();
        app.locals.collection = mongoClient.db("todosdb").collection("todos");
        console.log("Сервер ожидает подключения...");
    }catch(err) {
        return console.log(err);
    } 
})();
  
app.get("/api/todos", async(req, res) => {
          console.log(req, res)
    const collection = req.app.locals.collection;
    try{
        const users = await collection.find({}).toArray();
        res.send(users);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }  
});
app.get("/api/todos/:id", async(req, res) => {
          
    const collection = req.app.locals.collection;
    try{
        const id = new ObjectId(req.params.id);
        const user = await collection.findOne({_id: id});
        if(user) res.send(user);
        else res.sendStatus(404);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
     
app.post("/api/todos", jsonParser, async(req, res)=> {
         
    if(!req.body) return res.sendStatus(400);
         console.log(req, res)
    const todoTitle = req.body.title;
    const todoStatus = req.body.completed;
    const id = new ObjectId(req.params.id)

    const todo = new Todo( {title: todoTitle, completed :todoStatus});
         
    const collection = req.app.locals.collection;
      console.log("todo", todo)
      console.log('id   :' , id)
      console.log("collection", collection)

    try{
        await collection.insertOne(todo);
        // res.send(todo);
        // await todo.save();
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
      
app.delete("/api/todos/:id", async(req, res)=>{
          
    const collection = req.app.locals.collection;
    try{
        const id = new objectId(req.params.id);
        const result = await collection.findOneAndDelete({_id: id});
        const user = result.value;
        if(user) res.send(user);
        else res.sendStatus(404);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
     
app.patch("/api/todos", jsonParser, async(req, res)=>{
          
    if(!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
         
    const collection = req.app.locals.collection;
    try{
        const id = new objectId(req.body.id);
        const result = await collection.findOneAndUpdate({_id: id}, { $set: {age: userAge, name: userName}},
         {returnDocument: "after" });
 
        const user = result.value;
        if(user) res.send(user);
        else res.sendStatus(404);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
   
// process.on("SIGINT", async() => {
      
//     await mongoClient.close();
//     console.log("Приложение завершило работу");
//     process.exit();
// });

app.listen(4000,() =>{
  console.log('app listening on port 4000')
});
