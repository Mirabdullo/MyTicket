import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './entities/ticket_type.entity';

@Injectable()
export class TicketTypeService {
  constructor(
    @InjectModel(TicketType) private ticketTypeRepository: typeof TicketType
  ){}

  create(createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeRepository.create(createTicketTypeDto)
  }

  findAll() {
    return this.ticketTypeRepository.findAll({include:{all: true}})
  }

  findOne(id: number) {
    return this.ticketTypeRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeRepository.update(updateTicketTypeDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.ticketTypeRepository.destroy({where: {id}})
  }
}
