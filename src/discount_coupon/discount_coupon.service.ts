import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { DiscountCoupon } from './entities/discount_coupon.entity';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(DiscountCoupon) private discountRepository: typeof DiscountCoupon
  ){}

  create(createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountRepository.create(createDiscountCouponDto)
  }

  findAll() {
    return this.discountRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.discountRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountRepository.update(updateDiscountCouponDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.discountRepository.destroy({where: {id}})
  }
}
