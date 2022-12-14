import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectModel(Card) private cardRepository: typeof Card
  ){}
  create(createCardDto: CreateCardDto) {
    return this.cardRepository.create(createCardDto)
  }

  findAll() {
    return this.cardRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.cardRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return this.cardRepository.update(updateCardDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.cardRepository.destroy({where: {id}})
  }
}
