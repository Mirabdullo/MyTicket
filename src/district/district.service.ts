import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District) private districtRepository: typeof District
  ){}

  create(createDistrictDto: CreateDistrictDto) {
    return this.districtRepository.create(createDistrictDto)
  }

  findAll() {
    return this.districtRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.districtRepository.findByPk(id,{include: {all: true}})
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtRepository.update(updateDistrictDto,{where: {id}, returning: true})
  }

  remove(id: number) {
    return this.districtRepository.destroy({where: {id}})
  }
}
