import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket) private ticketRepository: typeof Ticket
  ){}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.create(createTicketDto)
  }

  findAll() {
    return this.ticketRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.ticketRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketRepository.update(updateTicketDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.ticketRepository.destroy({where: {id}})
  }
}
