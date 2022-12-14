import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAddress } from './entities/customer_address.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([CustomerAddress])
  ],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
