import { Module } from '@nestjs/common';
import { CardService } from './cart.service';
import { CardController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './entities/cart.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Status } from 'src/status/entities/status.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Ticket, Customer, Status])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
