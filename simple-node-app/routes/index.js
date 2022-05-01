const express = require('express');
const router = express.Router(); // get router to respond to requests
const { body, validationResult } = require('express-validator/check');

// root url response
// send form template to the client
router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

router.post('/', 
  [
    body('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],  
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send('Thank you for your registration!');
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

module.exports = router;
