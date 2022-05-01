const app = require('./app');
require('dotenv').config();

// set up listener
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
