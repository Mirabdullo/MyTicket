import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Akmal', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  @IsString({ message: 'fname must be a string' })
  first_name: string;

  @ApiProperty({ example: 'Fayziyev', description: 'Foydalanuvchi familiyasi' })
  @IsNotEmpty()
  @IsString({ message: 'lname  must be a string' })
  last_name: string;

  @ApiProperty({ example: '996582142', description: 'Foydalanuvchi phone number' })
  @IsNotEmpty()
  @IsString({ message: 'phone must be a string' })
  phone: string;

  @ApiProperty({ example: '12345', description: 'Foydalanuvchi paroli' })
  @IsNotEmpty()
  @IsString({ message: 'password must be a string' })
  @MinLength(4, { message: "Parol kamida 4ta belgidan iboraat bo'lisi keral " })
  password: string;

  @ApiProperty({ example: 'akmal@gmail.com', description: 'Foydalanuvchi emaili' })
  @IsEmail({}, { message: 'email must be a string' })
  email: string;

  @ApiProperty({ example: '2000-03-30', description: 'Foydalanuvchi tugilgan kuni' })
  @IsDateString({}, { message: 'birth day must be a string' })
  birth_day: Date;

  @ApiProperty({ example: '1', description: 'Foydalanuvchi jinsi numberda 1 or 2' })
  @IsNumber({}, { message: 'gender must be a number' })
  @Min(1)
  @Max(2)
  gender: number;

  @ApiProperty({ example: '2', description: 'Foydalanuvchi tili' })
  @IsNumber({}, { message: ' langId must be a string' })
  lang_id: number;

  @ApiProperty({ example: 'token', description: 'Foydalanuvchi tokeni' })
  @IsOptional()
  @IsString()
  hashed_refresh_token: string;
}
