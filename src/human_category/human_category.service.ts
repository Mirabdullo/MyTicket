import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './entities/human_category.entity';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategoryRepository: typeof HumanCategory
  ){}

  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryRepository.create(createHumanCategoryDto)
  }

  findAll() {
    return this.humanCategoryRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.humanCategoryRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryRepository.update(updateHumanCategoryDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.humanCategoryRepository.destroy({where: {id}})
  }
}
