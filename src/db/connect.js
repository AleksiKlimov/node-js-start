const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const config = require('../config')
const routes = require('../routes')
const app = express();

app.use(express.json());
app.use(cors({
  origin: config.clientUrl
}))
app.use('/api/todos', routes);

(async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (err) {
    return console.log(err);
  };
})();



module.exports = app;