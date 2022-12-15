import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingRepository: typeof Booking
  ){}

  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepository.create(createBookingDto) 
  }

  findAll() {
    return this.bookingRepository.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.bookingRepository.findByPk(id, {include: {all: true}})
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.update(updateBookingDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.bookingRepository.destroy({where: {id}})
  }
}
