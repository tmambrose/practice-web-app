const express = require('express');

// get router to respond to requests
const router = express.Router();

// root url response
router.get('/', (req, res) => {
  res.send('It works! Okay!');
});

module.exports = router;
