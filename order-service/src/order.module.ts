import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { rabbitMQConfig } from './rabbitmq/rabbitmq.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_RMQ_CLIENT',
        ...rabbitMQConfig('notification_queue'),
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
