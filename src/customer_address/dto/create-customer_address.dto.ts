import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerAddressDto {
  @ApiProperty({ example: '1', description: 'Foydalanuvchi idsi' })
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @ApiProperty({ example: 'Akmal', description: 'Foydalanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '1', description: 'Davlat idsi' })
  @IsNotEmpty()
  @IsNumber()
  country_id: number;

  @ApiProperty({ example: '1', description: 'viloyat idsi' })
  @IsNotEmpty()
  @IsNumber()
  region_id: number;

  @ApiProperty({ example: '1', description: 'tuman idsi' })
  @IsNotEmpty()
  @IsNumber()
  district_id: number;

  @ApiProperty({ example: 'navoiy', description: 'kocha nomi' })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ example: '1', description: 'uy raqami' })
  @IsNotEmpty()
  @IsString()
  house: string;

  @ApiProperty({ example: '1', description: 'kv  raqami' })
  @IsNotEmpty()
  @IsNumber()
  flat: number;

  @ApiProperty({ example: 'location', description: 'Foydalanuvchi locatsiyasi' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ example: '5455', description: 'Foydalanuvchi pochta raqami' })
  @IsNotEmpty()
  @IsString()
  post_index: string;

  @ApiProperty({ example: 'Adress info', description: 'adress info' })
  @IsNotEmpty()
  @IsString()
  info: string;
}
