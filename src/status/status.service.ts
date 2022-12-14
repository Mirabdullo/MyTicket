import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status) private statusRepository: typeof Status
  ){}

  create(createStatusDto: CreateStatusDto) {
    return this.statusRepository.create(createStatusDto)
  }

  findAll() {
    return this.statusRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.statusRepository.findByPk(id,{include: {all: true}})
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.statusRepository.update(updateStatusDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.statusRepository.destroy({where: {id}})
  }
}
