import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private languageRepository: typeof Language,
  ){}

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageRepository.create(createLanguageDto)
  }

  findAll() {
    return this.languageRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.languageRepository.findByPk(id,{include: {all: true}})
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return this.languageRepository.update(updateLanguageDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.languageRepository.destroy({where: {id}})
  }
}
