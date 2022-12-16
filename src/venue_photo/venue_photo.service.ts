import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './entities/venue_photo.entity';
import { FilesService } from '../files/files.service';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepository: typeof VenuePhoto,
    private readonly fileService: FilesService,
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.venuePhotoRepository.create({
      ...createVenuePhotoDto,
      image: fileName,
    });
    return post;
  }

  findAll() {
    return this.venuePhotoRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.venuePhotoRepository.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto, image: any) {
    const event = await this.venuePhotoRepository.findByPk(id)
    if(!event) throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND)
    if(image){
      await this.fileService.removeFile(event.image)
      const fileName = await this.fileService.createFile(image);
      
      return this.venuePhotoRepository.update({
        ...updateVenuePhotoDto,
        image: fileName
      },{where: {id}, returning: true})

    }
    return this.venuePhotoRepository.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.venuePhotoRepository.destroy({ where: { id } });
  }
}
