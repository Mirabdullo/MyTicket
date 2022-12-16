import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CustomerCard } from 'src/customer_card/entities/customer_card.entity';
import { CustomerAddress } from 'src/customer_address/entities/customer_address.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Customer, CustomerCard, CustomerAddress]), JwtModule],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
