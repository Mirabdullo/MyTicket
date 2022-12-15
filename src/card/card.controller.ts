import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@ApiTags('Card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiOperation({summary: "Card qo'shish"})
  @ApiResponse({status: 201, type: Card})
  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @ApiOperation({summary: "Cardlar ro'yxati"})
  @ApiResponse({status: 201, type: [Card]})
  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @ApiOperation({summary: "Card id bo'yicha olish"})
  @ApiResponse({status: 201, type: Card})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(+id);
  }

  @ApiOperation({summary: "Cardni id bo'yicha o'zgartirish"})
  @ApiResponse({status: 201, type: Card})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }

  @ApiOperation({summary: "Cardni o'chirish"})
  @ApiResponse({status: 201, type: Card})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
