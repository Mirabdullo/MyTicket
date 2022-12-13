import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerRepository: typeof Customer
  ){}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.create(createCustomerDto)
  }

  findAll() {
    return this.customerRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.customerRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(updateCustomerDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.customerRepository.destroy({where: {id}})
  }
}
