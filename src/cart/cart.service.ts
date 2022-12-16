import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CardService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}
  create(CreateCartDto: CreateCartDto) {
    return this.cartRepository.create(CreateCartDto);
  }

  findAll() {
    return this.cartRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.cartRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, UpdateCartDto: UpdateCartDto) {
    return this.cartRepository.update(UpdateCartDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.cartRepository.destroy({ where: { id } });
  }
}
