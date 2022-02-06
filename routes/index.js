const express = require('express');
const router = express.Router();
const { postValidator, putValidator } = require('../middlewares/validator');

const {
  getOrders,
  getOrderById,
  postOrder,
  updateOrderById,
  deleteOrderById,
  deleteOrders,
} = require('../controllers');

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', postValidator, postOrder);
router.put('/:id', putValidator, updateOrderById);
router.delete('/:id', deleteOrderById);
router.delete('/', deleteOrders);

module.exports = router;
