import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@ApiTags('Cart')
@Controller('cart')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiOperation({ summary: "Cart qo'shish" })
  @ApiResponse({ status: 201, type: Cart })
  @Post()
  create(@Body() CreateCartDto: CreateCartDto) {
    return this.cardService.create(CreateCartDto);
  }

  @ApiOperation({ summary: "Cardlar ro'yxati" })
  @ApiResponse({ status: 201, type: [Cart] })
  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @ApiOperation({ summary: "Cart id bo'yicha olish" })
  @ApiResponse({ status: 201, type: Cart })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(+id);
  }

  @ApiOperation({ summary: "Cardni id bo'yicha o'zgartirish" })
  @ApiResponse({ status: 201, type: Cart })
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCartDto: UpdateCartDto) {
    return this.cardService.update(+id, UpdateCartDto);
  }

  @ApiOperation({ summary: "Cardni o'chirish" })
  @ApiResponse({ status: 201, type: Cart })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
