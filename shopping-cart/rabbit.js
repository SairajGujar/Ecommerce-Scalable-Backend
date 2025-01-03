import { connect } from "amqplib";

export const connectRabbit = async () => {
  try {
    const connection = await connect("amqp://guest:guest@localhost:5672");
    const channel = await connection.createChannel();
    console.log("Connected to RabbitMQ");
    return { connection, channel };
  } catch (err) {
    console.error("Error connecting to RabbitMQ:", err);
  }
};

export const sendMessage = async (queueName, message) => {
  const { channel } = await connectRabbit();
  await channel.assertQueue(queueName, { durable: true });
  channel.sendToQueue(queueName, Buffer.from(message));
};

export const consumeMessages = async (queueName, callback) => {
  const { channel } = await connectRabbit();
  await channel.assertQueue(queueName, { durable: true });
  channel.consume(queueName, (msg) => {
    if (msg) {
      callback(msg.content.toString());
      channel.ack(msg);
    }
  });
};
