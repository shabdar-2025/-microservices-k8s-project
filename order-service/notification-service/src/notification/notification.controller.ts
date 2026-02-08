import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: any) {
    console.log('📦 Order Created Event:', data);
  }

  @EventPattern('payment_success')
  handlePaymentSuccess(@Payload() data: any) {
    console.log('✅ Payment Success Event:', data);
  }

  @EventPattern('payment_failed')
  handlePaymentFailed(@Payload() data: any) {
    console.log('❌ Payment Failed Event:', data);
  }
}
