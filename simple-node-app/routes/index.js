const express = require('express');

// get router to respond to requests
const router = express.Router();

// root url response
// send form template to the client
router.get('/', (req, res) => {
  res.render('form');
});

module.exports = router;
