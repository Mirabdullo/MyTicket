import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateCardDto {
  @ApiProperty({ example: '1', description: 'ticket id' })
  @IsNotEmpty()
  @IsNumber()
  ticket_id: number;

  @ApiProperty({ example: '1', description: 'customer id' })
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @ApiProperty({ example: '18:00', description: 'Boshanish vaqti' })
  @IsNotEmpty()
  @IsMilitaryTime()
  createdAt: string;

  @ApiProperty({ example: '20:00', description: 'Tugash vaqti' })
  @IsNotEmpty()
  @IsMilitaryTime()
  finishedAt: string;

  @ApiProperty({ example: '1', description: 'status id' })
  @IsNotEmpty()
  @IsNumber()
  status_id: number;
}
