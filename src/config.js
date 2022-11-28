require(`dotenv-defaults`).config()

const config = {
  port: process.env.PORT,
  clientUrl: process.env.CLIENT_URL,
  mongoUrl: process.env.MONGOURL,
}

module.exports = config;
