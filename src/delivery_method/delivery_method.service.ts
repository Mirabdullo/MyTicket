import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';

@Injectable()
export class DeliveryMethodService {
  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return 'This action adds a new deliveryMethod';
  }

  findAll() {
    return `This action returns all deliveryMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryMethod`;
  }

  update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return `This action updates a #${id} deliveryMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryMethod`;
  }
}
