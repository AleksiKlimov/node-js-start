// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose') 
const  express = require('express');
const cors = require('cors');
const  routes  = require('./routes');

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', routes);

// const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

(async () => {
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/");
    //    app.locals.collection = mongoClient.db("todosdb").collection("todos");
       console.log("Сервер ожидает подключения...");
       app.listen(4000,() =>{
        console.log('app listening on port 4000')
      });
      
   }catch(err) {
       return console.log(err);
   } 
  })();
  