import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './entities/venue.entity';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue) private venueRepository: typeof Venue
  ){}
  create(createVenueDto: CreateVenueDto) {
    return this.venueRepository.create(createVenueDto)
  }

  findAll() {
    return this.venueRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.venueRepository.findByPk(id,{include: {all: true}})
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.venueRepository.update(updateVenueDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.venueRepository.destroy({where: {id}})
  }
}
