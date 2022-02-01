const { fetchOrders } = require('../services');

const getOrders = async (req, res) => {
  try {
    const orders = await fetchOrders();
    res.status(200).send(orders);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getOrders };
