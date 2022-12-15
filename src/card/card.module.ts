import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './entities/card.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Status } from 'src/status/entities/status.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Card,
      Ticket,
      Customer,
      Status])
  ],
  controllers: [CardController],
  providers: [CardService]
})
export class CardModule {}
