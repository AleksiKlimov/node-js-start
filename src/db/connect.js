const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
const config = require('../config')
const routes = require('../routes')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/todos', routes);


(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todosdb");
    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`)
    });
  } catch (err) {
    return console.log(err);
  }
})();



module.exports = app;