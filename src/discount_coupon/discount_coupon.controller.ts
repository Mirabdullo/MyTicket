import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { DiscountCoupon } from './entities/discount_coupon.entity';

@ApiTags('Discount coupon')
@Controller('discount-coupon')
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}

  @ApiOperation({summary: "Discount qo'shish"})
  @ApiResponse({status: 201, type: DiscountCoupon})
  @Post()
  create(@Body() createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponService.create(createDiscountCouponDto);
  }

  @ApiOperation({summary: "Discount hammasi"})
  @ApiResponse({status: 201, type: DiscountCoupon})
  @Get()
  findAll() {
    return this.discountCouponService.findAll();
  }

  @ApiOperation({summary: "Discount bitta olish"})
  @ApiResponse({status: 201, type: DiscountCoupon})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCouponService.findOne(+id);
  }

  @ApiOperation({summary: "Discount ozgartirish"})
  @ApiResponse({status: 201, type: DiscountCoupon})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountCouponService.update(+id, updateDiscountCouponDto);
  }

  @ApiOperation({summary: "Discountni ochirish"})
  @ApiResponse({status: 201, type: DiscountCoupon})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCouponService.remove(+id);
  }
}
