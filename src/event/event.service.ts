import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async update(id: number, updateEventDto: UpdateEventDto, image: any) {
    const event = await this.eventRepository.findByPk(id)
    if(!event) throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND)
    if(image){
      await this.fileService.removeFile(event.image)
      const fileName = await this.fileService.createFile(image);
      
      return this.eventRepository.update({
        ...updateEventDto,
        image: fileName
      },{where: {id}, returning: true})

    }
    return this.eventRepository.update(updateEventDto, {where: {id}, returning: true})
  }

  async remove(id: number) {
    const event = await this.eventRepository.findByPk(id)
    if(!event) throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND)
    return this.eventRepository.destroy({where: {id}})
  }
}
