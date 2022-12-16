import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AdminOrCustomer } from 'src/guards/jwtAdminCustomer.guard';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './entities/customer_card.entity';

@ApiTags('Customer cart')
@Controller('customer-cart')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "Karta qo'shish" })
  @ApiResponse({ status: 201, type: CustomerCard })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: 'Kartalar royxati' })
  @ApiResponse({ status: 201, type: CustomerCard })
  @UseGuards(AdminOrCustomer)
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: 'Kartani bittasini olish' })
  @ApiResponse({ status: 201, type: CustomerCard })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: 'Kartani ozgartirish' })
  @ApiResponse({ status: 201, type: CustomerCard })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto,
  ) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: 'Kartani id boyicha ochirish' })
  @ApiResponse({ status: 201, type: CustomerCard })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
