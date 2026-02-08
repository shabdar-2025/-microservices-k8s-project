import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_RMQ_CLIENT')
    private readonly client: ClientProxy,
  ) {}

  createOrder(order: any) {
    this.client.emit('order_created', order);
    return { message: 'Order created & event emitted' };
  }
}
