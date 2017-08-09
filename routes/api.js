
// Dependencies
var express    = require('express');        // call express
var router     = express.Router();

// Models
var TextM = require('../models/text');

// Routes
TextM.methods(['get', 'put', 'post', 'delete']);
TextM.register(router, '/texts');

// Return router
module.exports = router;
