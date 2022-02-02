const Order = require('../models/order');

// Retrieve the orders
const fetchOrders = async () => {
  try {
    return await Order.find({});
  } catch (error) {
    return error;
  }
};

// Return a single order by its id
const fetchOrderById = async (id) => {
  try {
    return await Order.findById(id);
  } catch (error) {
    return error;
  }
};

// Create an order
const createOrder = async (order) => {
  try {
    await Order.create(order);
    return 'Order is created';
  } catch (error) {
    return error;
  }
};

module.exports = { fetchOrders, fetchOrderById, createOrder };
