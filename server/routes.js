const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router
  .route('/api')
  .get(controller.mongodb.get)

// router 
//   .route('/api/sql')
//   .get(controller.postgresql.get)
// router
//   .route('/api/purses')
//   .get(controller.getpurses)

// router
//   .route('/api/shoes')
//   .get(controller.getshoes)

// router
//   .route('/api/earrings')
//   .get(controller.getearrings)
// router
//   .route('/api/bracelets')
//   .get(controller.getbracelets)
// router
//   .route('/api/dress')
//   .get(controller.getdresses)

module.exports = router;