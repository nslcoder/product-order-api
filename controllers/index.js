const {
  fetchOrders,
  fetchOrderById,
  createOrder,
  amendOrderById,
  eraseOrderById,
  eraseOrders,
} = require('../services');

// Call a service to get the orders
const getOrders = async (req, res) => {
  const { page, filter, sort } = req.query;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const orders = await fetchOrders(skip, limit, filter, sort);
    res.status(200).send(orders);
  } catch (error) {
    res.send(error);
  }
};

// Call a service to get a single order by its id
const getOrderById = async (req, res) => {
  try {
    const order = await fetchOrderById(req.params.id);
    res.status(200).send(order);
  } catch (error) {
    res.send(error);
  }
};

// Call a service to create an order
const postOrder = async (req, res) => {
  try {
    const message = await createOrder(req.body);
    res.status(201).send({ message });
  } catch (error) {
    res.send(error);
  }
};

// Call a service to update an order
const updateOrderById = async (req, res) => {
  try {
    const message = await amendOrderById(req.params.id, req.body);
    res.status(200).send({ message });
  } catch (error) {
    res.send(error);
  }
};

// Call a service to delete an order
const deleteOrderById = async (req, res) => {
  try {
    const message = await eraseOrderById(req.params.id);
    res.status(200).send({ message });
  } catch (error) {
    res.send(error);
  }
};

// Call a service to delete the orders
const deleteOrders = async (req, res) => {
  try {
    const message = await eraseOrders();
    res.status(200).send({ message });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getOrders,
  getOrderById,
  postOrder,
  updateOrderById,
  deleteOrderById,
  deleteOrders,
};
