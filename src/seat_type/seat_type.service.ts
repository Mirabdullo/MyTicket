import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './entities/seat_type.entity';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType) private seatTypeRepository: typeof SeatType
  ){}

  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeRepository.create(createSeatTypeDto)
  }

  findAll() {
    return this.seatTypeRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.seatTypeRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeRepository.update(updateSeatTypeDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.seatTypeRepository.destroy({where: {id}})
  }
}
