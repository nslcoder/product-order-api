const Order = require('../models/order');

const fetchOrders = async () => {
  try {
    return await Order.find({});
  } catch (error) {
    return error;
  }
};

module.exports = { fetchOrders };
