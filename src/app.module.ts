import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { VenueModule } from './venue/venue.module';
import { TicketModule } from './ticket/ticket.module';
import { AdminModule } from './admin/admin.module';
import { BookingModule } from './booking/booking.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CardModule } from './card/card.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { EventTypeModule } from './event_type/event_type.module';
import { CustomerModule } from './customer/customer.module';
import { SeatModule } from './seat/seat.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { StatusModule } from './status/status.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { LanguageModule } from './language/language.module';
import { CountryModule } from './country/country.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Admin } from './admin/entities/admin.entity';
import { VenueType } from './venue_type/entities/venue_type.entity';
import { Country } from './country/entities/country.entity';
import { Region } from './region/entities/region.entity';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host:process.env.POSTGRES_HOST,
      port:Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Admin, VenueType,Country,Region],
      autoLoadModels: true,
      logging: false
    }),
    EventModule,
    VenueModule,
    TicketModule,
    AdminModule,
    BookingModule,
    CustomerCardModule,
    CardModule,
    SeatTypeModule,
    HumanCategoryModule,
    EventTypeModule,
    CustomerModule,
    SeatModule,
    VenueTypeModule,
    VenuePhotoModule,
    StatusModule,
    RegionModule,
    DistrictModule,
    TicketTypeModule,
    LanguageModule,
    CountryModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    DiscountCouponModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
