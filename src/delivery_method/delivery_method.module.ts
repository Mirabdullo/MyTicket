import { Module } from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { DeliveryMethodController } from './delivery_method.controller';

@Module({
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService]
})
export class DeliveryMethodModule {}
