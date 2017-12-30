var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  alias: {type: String, required : true},
  item : String,
  number : Number
});

var Item = mongoose.model('items', itemSchema); // items is the collection name

module.exports = Item;
