import { RmqOptions, Transport } from '@nestjs/microservices';

export const rabbitMQConfig = (queue: string): RmqOptions => ({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@localhost:5672'],
    queue,
    queueOptions: {
      durable: true, // ✅ Fault Tolerance پایه
    },
  },
});
