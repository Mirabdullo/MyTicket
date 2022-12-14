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
    return `This action returns a #${id} customerAddress`;
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return `This action updates a #${id} customerAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerAddress`;
  }
}
