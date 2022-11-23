const { MongoClient } = require('mongodb');
// import { ObjectId } from 'mongodb'
const  express = require('express');
const  routes  = require('./routes');


const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
 const app = express();

app.use(express.json())
app.use('/api', routes);



(async () => {
    try {
       await mongoClient.connect();
       app.locals.collection = mongoClient.db("todosdb").collection("todos");
       console.log("Сервер ожидает подключения...");
       app.listen(4000,() =>{
        console.log('app listening on port 4000')
      });
      
   }catch(err) {
       return console.log(err);
   } 
  })();
  




// import  express from 'express';

// const app = express();

// process.on("SIGINT", async() => {
      
//     await mongoClient.close();
//     console.log("Приложение завершило работу");
//     process.exit();
// });

