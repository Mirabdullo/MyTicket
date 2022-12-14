import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { DeliveryMethod } from './entities/delivery_method.entity';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod) private deliveryRepository: typeof DeliveryMethod
  ){}

  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryRepository.create(createDeliveryMethodDto)
  }

  findAll() {
    return this.deliveryRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.deliveryRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryRepository.update(updateDeliveryMethodDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.deliveryRepository.destroy({where: {id}})
  }
}
