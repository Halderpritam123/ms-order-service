const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "order-service",
  brokers: process.env.KAFKA_BROKERS.split(",")
});

module.exports = kafka;
