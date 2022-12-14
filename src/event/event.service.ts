import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventRepository: typeof Event
  ){}
  create(createEventDto: CreateEventDto) {
    return this.eventRepository.create(createEventDto)
  }

  findAll() {
    return this.eventRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.eventRepository.findByPk(id,{include: {all: true}})
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepository.update(updateEventDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.eventRepository.destroy({where: {id}})
  }
}
