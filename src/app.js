const express = require('express');
const cors = require('cors');

const config = require('./config')
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors({
  origin: config.clientUrl
}))

app.use('/api', routes);

module.exports = app;
