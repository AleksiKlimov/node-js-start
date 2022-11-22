// import  { MongoClient } from "mongodb"
    

// const url = "mongodb://127.0.0.1:27017/";
// const mongoClient = new MongoClient(url);
 
// async function run() {
//     try {
//       await mongoClient.connect();
//       const db = mongoClient.db("todosdb");
//       const collection = db.collection("todos");
//       const todo = {title: "asdfg", completed: true,};
//       const result = await collection.insertOne(todo);
//       // const allRes = await  db.getCollection("todos").find({});
//       // console.log(allRes)
//       console.log(result);
//       console.log(todo);
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// console.log(run)
// run().catch(console.log)