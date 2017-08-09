
// Dependencies
var restful    = require('node-restful');
var mongoose   = restful.mongoose;       // call mongoDB

// Schema
var textSchema = new mongoose.Schema({
  type: String,
  languege: String,
  test: String,
  value: String
});

// return model
module.exports = restful.model('text', textSchema);
