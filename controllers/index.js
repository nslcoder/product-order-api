const { fetchOrders, fetchOrderById, createOrder } = require('../services');

// Call a service to get the orders
const getOrders = async (req, res) => {
  try {
    const orders = await fetchOrders();
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
    const orderData = req.body;
    const message = await createOrder(orderData);
    res.status(200).send({ message });
  } catch (error) {}
};

module.exports = { getOrders, getOrderById, postOrder };
