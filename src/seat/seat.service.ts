import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat) private seatRepository: typeof Seat
  ){}

  create(createSeatDto: CreateSeatDto) {
    return this.seatRepository.create(createSeatDto)
  }

  findAll() {
    return this.seatRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.seatRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    return this.seatRepository.update(updateSeatDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.seatRepository.destroy({where: {id}})
  }
}
