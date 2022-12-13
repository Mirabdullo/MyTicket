import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './entities/payment_method.entity';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod) private paymentRepository: typeof PaymentMethod
  ){}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentRepository.create(createPaymentMethodDto)
  }

  findAll() {
    return this.paymentRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.paymentRepository.findByPk(id,{include:{all: true}})
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentRepository.update(updatePaymentMethodDto,{where: {id}, returning: true})
  }

  remove(id: number) {
    return this.paymentRepository.destroy({where: {id}})
  }
}
