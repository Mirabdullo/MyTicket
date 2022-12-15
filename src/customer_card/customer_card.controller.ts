import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminOrCustomer } from 'src/guards/jwtAdminCustomer';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';

@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @UseGuards(AdminOrCustomer)
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
