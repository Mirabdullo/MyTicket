import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CustomerCardController } from './customer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCard } from './entities/customer_card.entity';
import { JwtModule } from '@nestjs/jwt';
import { CustomerAddress } from 'src/customer_address/entities/customer_address.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([CustomerCard]), JwtModule
  ],
  controllers: [CustomerCardController],
  providers: [CustomerCardService]
})
export class CustomerCardModule {}
