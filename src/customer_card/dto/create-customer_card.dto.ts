import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateCustomerCardDto {
  @ApiProperty({ example: '1', description: 'Customer ID' })
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @ApiProperty({ example: 'Akmal', description: 'Customer ismi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '998521212', description: 'Customer phone number' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: '7412 2145 1253 5212',
    description: 'Customer kard number',
  })
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({ example: '2023', description: 'Customer cart year' })
  @IsNotEmpty()
  @IsNumber()
  @Min(2022)
  year: number;

  @ApiProperty({ example: '11', description: 'Customer cart month' })
  @IsNumber()
  @Min(1)
  @Max(12)
  month: number;

  @ApiProperty({ example: 'true', description: 'cart is active' })
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({ example: '1', description: 'cart is main ' })
  @IsBoolean()
  is_main: boolean;
}
