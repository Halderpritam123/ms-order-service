const kafka = require("./client");

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
};

const publishOrderCreated = async (order) => {
  await producer.send({
    topic: "order-created",
    messages: [
      {
        key: String(order.id),
        value: JSON.stringify(order)
      }
    ]
  });
};

module.exports = {
  connectProducer,
  publishOrderCreated
};
