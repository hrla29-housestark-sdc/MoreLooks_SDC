const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://ec2-52-15-158-80.us-east-2.compute.amazonaws.com:27017/morelooks', {useNewUrlParser: true})
  .then(() => console.log('connection made to MongoDB'))
  .catch(err => console.error(err))

const productSchema = new mongoose.Schema({
  id: Number,
  productname: String,
  imageurl: [String],
  shoesizes: [Number],
  clothingsizes: [String],
  designer: String,
  price: Number,
  color: [String],
  itemtype: String,
  description: String,
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
