import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CustomerCardController } from './customer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCard } from './entities/customer_card.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([CustomerCard]), JwtModule
  ],
  controllers: [CustomerCardController],
  providers: [CustomerCardService]
})
export class CustomerCardModule {}
