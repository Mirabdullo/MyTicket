import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventRepository: typeof Event,
    private readonly fileService: FilesService,

  ){}
  async create(createEventDto: CreateEventDto, image: any) {
    try {
      const fileName = await this.fileService.createFile(image);
      const post = await this.eventRepository.create({
        ...createEventDto,
        image: fileName,
      });
      return post;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException("Serverda xatolik")
    }
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
