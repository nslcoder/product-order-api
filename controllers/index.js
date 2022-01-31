const gerOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrders({});
    res.status(200).send(orders);
  } catch (error) {
    console.log(error);
  }
};
