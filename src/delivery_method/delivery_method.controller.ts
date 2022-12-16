import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeliveryMethodService } from './delivery_method.service';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { DeliveryMethod } from './entities/delivery_method.entity';

@ApiTags('Delivery method')
@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @ApiOperation({summary: "Delivery qo'shish"})
  @ApiResponse({status: 201, type: DeliveryMethod})
  @Post()
  create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @ApiOperation({summary: "Delivery hammasi"})
  @ApiResponse({status: 201, type: [DeliveryMethod]})
  @Get()
  findAll() {
    return this.deliveryMethodService.findAll();
  }

  @ApiOperation({summary: "Delivery bittasini olish"})
  @ApiResponse({status: 201, type: DeliveryMethod})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryMethodService.findOne(+id);
  }

  @ApiOperation({summary: "Delivery ozgartirish"})
  @ApiResponse({status: 201, type: DeliveryMethod})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodService.update(+id, updateDeliveryMethodDto);
  }

  @ApiOperation({summary: "Delivery ochirish"})
  @ApiResponse({status: 201, type: DeliveryMethod})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryMethodService.remove(+id);
  }
}
