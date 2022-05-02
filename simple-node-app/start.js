require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect($DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${$DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const app = require('./app');
// set up listener
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
