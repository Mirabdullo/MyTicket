import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './entities/event_type.entity';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private eventTypeRepository: typeof EventType
  ){}

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeRepository.create(createEventTypeDto)
  }

  findAll() {
    return this.eventTypeRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.eventTypeRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeRepository.update(updateEventTypeDto,{where: {id}, returning: true})
  }

  remove(id: number) {
    return this.eventTypeRepository.destroy({where: {id}})
  }
}
