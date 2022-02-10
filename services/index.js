const Order = require('../models/order');

// Retrieve the orders
const fetchOrders = async (skip, limit, filter, sort) => {
  try {
    if (filter && sort) {
      return await Order.find({ size: filter })
        .sort({ customer: sort })
        .skip(skip)
        .limit(limit);
    } else if (filter) {
      return await Order.find({ size: filter }).skip(skip).limit(limit);
    } else if (sort) {
      return await Order.find({})
        .sort({ customer: sort })
        .skip(skip)
        .limit(limit);
    } else {
      return await Order.find({}).skip(skip).limit(limit);
    }
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

// Update an order
const amendOrderById = async (id, orderUpdate) => {
  try {
    await Order.findByIdAndUpdate(id, orderUpdate);
    return 'Order is updated';
  } catch (error) {
    return error;
  }
};

// Delete an order
const eraseOrderById = async (id) => {
  try {
    await Order.findByIdAndDelete(id);
    return 'Order is deleted';
  } catch (error) {
    return error;
  }
};

// Delete orders
const eraseOrders = async () => {
  try {
    await Order.deleteMany({});
    return 'Orders are deleted';
  } catch (error) {
    return error;
  }
};

module.exports = {
  fetchOrders,
  fetchOrderById,
  createOrder,
  amendOrderById,
  eraseOrderById,
  eraseOrders,
};
