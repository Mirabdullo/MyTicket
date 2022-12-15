import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './entities/event.entity';
import { FilesModule } from 'src/files/files.module';
import { EventType } from 'src/event_type/entities/event_type.entity';
import { HumanCategory } from 'src/human_category/entities/human_category.entity';
import { Venue } from 'src/venue/entities/venue.entity';
import { Language } from 'src/language/entities/language.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Event,EventType,HumanCategory,Venue,Language]),
    FilesModule
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
