import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country) private countryRepository: typeof Country
  ){}
  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.create(createCountryDto)
  }

  findAll() {
    return this.countryRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.countryRepository.findByPk(id,{include: {all: true}})
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update(updateCountryDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.countryRepository.destroy({where: {id}})
  }
}
