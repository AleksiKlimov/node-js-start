const app = require('./app');
const config = require('./config');
const mongoose = require('./db/connect');

(() => {
  try {
    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  };
})();


