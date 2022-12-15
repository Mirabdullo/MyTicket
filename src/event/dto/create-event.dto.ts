import { IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator"

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    event_name: string

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
    @IsNumberString()
    event_type_id: number

    @IsNotEmpty()
    @IsNumberString()
    human_category_id: number

    @IsNotEmpty()
    @IsNumberString()
    venue_id: number

    @IsNotEmpty()
    @IsNumberString()
    lang_id: number

    @IsOptional()
    @IsDateString()
    relase_date: Date
 
}
