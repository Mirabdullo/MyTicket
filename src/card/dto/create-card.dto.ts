import { IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @IsNumber()
  ticket_id: number;

  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsNotEmpty()
  @IsMilitaryTime()
  createdAt: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  finishedAt: string;

  @IsNotEmpty()
  @IsNumber()
  status_id: number;
}
