const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
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

module.exports = mongoose.model('Order', OrderSchema);
