const { body, validationResult } = require('express-validator');

const postValidator = [
  body('customer').notEmpty().isString(),
  body('size').notEmpty().isNumeric(),
  body('items').notEmpty().isArray(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

const putValidator = [
  body('customer').isString().optional(),
  body('size').isNumeric().optional(),
  body('items').isArray().optional(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

module.exports = { postValidator, putValidator };
