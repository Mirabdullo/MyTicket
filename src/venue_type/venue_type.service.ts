import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './entities/venue_type.entity';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeRepository: typeof VenueType,
  ){}


  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeRepository.create(createVenueTypeDto)
  }

  findAll() {
    return this.venueTypeRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.venueTypeRepository.findByPk(id,{include: {all: true}})
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venueType = await this.venueTypeRepository.update(updateVenueTypeDto, {where: {id:id}, returning: true})
    return venueType[1][0]
  }

  remove(id: number) {
    return this.venueTypeRepository.destroy({where: {id}})
  }
}
