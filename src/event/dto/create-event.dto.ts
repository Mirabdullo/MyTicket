import { IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    event_name: string

    @IsNotEmpty()
    @IsString()
    photo: string

    @IsNotEmpty()
    @IsDateString()
    start_date: Date

    @IsNotEmpty()
    @IsMilitaryTime()
    start_time: string

    @IsNotEmpty()
    @IsDateString()
    finish_date: Date

    @IsNotEmpty()
    @IsMilitaryTime()
    finish_time: string

    @IsNotEmpty()
    @IsString()
    info: string

    @IsNotEmpty()
    @IsNumber()
    event_type_id: number

    @IsNotEmpty()
    @IsNumber()
    human_category_id: number

    @IsNotEmpty()
    @IsNumber()
    venue_id: number

    @IsNotEmpty()
    @IsNumber()
    lang_id: number

    @IsOptional()
    @IsDateString()
    relase_date: Date
 
}
