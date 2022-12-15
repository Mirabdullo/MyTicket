import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({summary: "Booking qo'shish"})
  @ApiResponse({status: 201, type: Booking})
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }


  @ApiOperation({summary: "Bookinglar ro'yxati"})
  @ApiResponse({status: 201, type: [Booking]})
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }


  @ApiOperation({summary: "Booking  id bo'yicha bittasini olish"})
  @ApiResponse({status: 201, type: Booking})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }


  @ApiOperation({summary: "Bookingni id bo'yicha o'zgartirish"})
  @ApiResponse({status: 201, type: Booking})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }


  @ApiOperation({summary: "Booking o'chirish"})
  @ApiResponse({status: 201, type: Booking})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
