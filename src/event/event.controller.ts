import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OnlyAdminGuards } from 'src/guards/all-admins.guard';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({summary: "Event qo'shish"})
  @ApiResponse({status: 201, type: Event})
  @UseGuards(OnlyAdminGuards)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() image) {
    console.log("object");
    return this.eventService.create(createEventDto,image);
  }

  @ApiOperation({summary: "Eventlar royxati"})
  @ApiResponse({status: 201, type: Event})
  @UseGuards(OnlyAdminGuards)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({summary: "Event bittsini olish"})
  @ApiResponse({status: 201, type: Event})
  @UseGuards(OnlyAdminGuards)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({summary: "Event bittasini ozgartirish"})
  @ApiResponse({status: 201, type: Event})
  @UseGuards(OnlyAdminGuards)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto, @UploadedFile() image) {
    return this.eventService.update(+id, updateEventDto, image);
  }

  @ApiOperation({summary: "Event ochirish"})
  @ApiResponse({status: 201, type: Event})
  @UseGuards(OnlyAdminGuards)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
