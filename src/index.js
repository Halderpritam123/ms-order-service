const express = require("express");
require("dotenv").config();
const { connectProducer } = require("./kafka/producer");
const orderRoutes = require("./routes/order.routes");

const app = express();
app.use(express.json());

app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 3002;

const start = async () => {
  await connectProducer();
  app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
  });
};

start();
