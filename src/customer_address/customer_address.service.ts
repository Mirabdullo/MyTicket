import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { CustomerAddress } from './entities/customer_address.entity';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress) private addressRepository: typeof CustomerAddress
  ){}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.addressRepository.create(createCustomerAddressDto)
  }

  findAll() {
    return this.addressRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.addressRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.addressRepository.update(updateCustomerAddressDto,{where: {id}, returning: true})
  }

  remove(id: number) {
    return this.addressRepository.destroy({where: {id}})
  }
}
