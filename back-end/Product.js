const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {  
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true,
    enum: ['Hp', 'Dell', 'Lenovo', 'Acer'] 
  }
});

module.exports = mongoose.model('Product', schema, 'products');
