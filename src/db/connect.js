const mongoose = require('mongoose');

const config = require('../config')

try {
  mongoose.connect(config.mongoUrl);
  console.log('connect with bd');
} catch (error) {
  console.log('error', error);
}

module.exports = mongoose;