import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { CustomerAddress } from './entities/customer_address.entity';

@ApiTags('Customer address')
@Controller('customer-address')
export class CustomerAddressController {
  constructor(private readonly customerAddressService: CustomerAddressService) {}

  @ApiOperation({summary: " Foydalanuvchi Manzilini qo'shish"})
  @ApiResponse({status: 201, type: CustomerAddress})
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({summary: " Foydalanuvchi Manzillari"})
  @ApiResponse({status: 201, type: [CustomerAddress]})
  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({summary: " Foydalanuvchi Manzilini idsi boyicha olish"})
  @ApiResponse({status: 201, type: CustomerAddress})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation({summary: " Foydalanuvchi Manzilini ozgartirish"})
  @ApiResponse({status: 201, type: CustomerAddress})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @ApiOperation({summary: " Foydalanuvchi Manzilini ochirish"})
  @ApiResponse({status: 201, type: CustomerAddress})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAddressService.remove(+id);
  }
}
