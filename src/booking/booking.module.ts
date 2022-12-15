import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './entities/booking.entity';
import { Card } from 'src/card/entities/card.entity';
import { PaymentMethod } from 'src/payment_method/entities/payment_method.entity';
import { DeliveryMethod } from 'src/delivery_method/entities/delivery_method.entity';
import { DiscountCoupon } from 'src/discount_coupon/entities/discount_coupon.entity';
import { Status } from 'src/status/entities/status.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Booking,
      Card,
      PaymentMethod,
      DeliveryMethod,
      DiscountCoupon,
      Status])
  ],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
