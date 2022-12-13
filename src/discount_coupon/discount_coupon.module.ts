import { Module } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { DiscountCouponController } from './discount_coupon.controller';

@Module({
  controllers: [DiscountCouponController],
  providers: [DiscountCouponService]
})
export class DiscountCouponModule {}
