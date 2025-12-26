const express = require("express");
const {
  getOrders,
  createOrder
} = require("../controllers/order.controller");

const router = express.Router();

router.get("/", getOrders);     // ✅ function
router.post("/", createOrder); // ✅ function

module.exports = router;
