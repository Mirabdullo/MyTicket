import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './entities/customer_card.entity';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard) private cardRepository: typeof CustomerCard
  ){}
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.cardRepository.create(createCustomerCardDto)
  }

  findAll() {
    return this.cardRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.cardRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.cardRepository.update(updateCustomerCardDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.cardRepository.destroy({where: {id}})
  }
}
