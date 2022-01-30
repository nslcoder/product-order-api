const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customer: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
    min: 1,
  },
  items: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);
