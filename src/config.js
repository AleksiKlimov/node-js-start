const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config()
const defaultEnv = dotenv.parse(fs.readFileSync('.env'));
const localEnv = dotenv.parse(fs.readFileSync('default.env'));

const joinedEnv = {
  ...defaultEnv,
  ...localEnv,
};

const config = {
  port: joinedEnv.PORT,
  clientUrl: joinedEnv.CLIENT_URL,
  mongoUrl: joinedEnv.MONGO_URL,
};

module.exports = config;
