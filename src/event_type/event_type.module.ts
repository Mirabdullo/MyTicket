import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './entities/event_type.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([EventType])
  ],
  controllers: [EventTypeController],
  providers: [EventTypeService]
})
export class EventTypeModule {}
