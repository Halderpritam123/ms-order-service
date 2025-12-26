const { publishOrderCreated } = require("../kafka/producer");

// GET /orders
exports.getOrders = (req, res) => {
  res.json([
    { id: 101, item: "Laptop", userId: 1 }
  ]);
};

// POST /orders
exports.createOrder = async (req, res) => {
  const order = {
    id: Date.now(),
    item: req.body.item,
    userId: req.body.userId
  };

  await publishOrderCreated(order);

  res.status(201).json({
    message: "Order created",
    order
  });
};
