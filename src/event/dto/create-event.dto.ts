import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator"

export class CreateEventDto {
    @ApiProperty({example: 'Event', description: "event name"})
    @IsNotEmpty()
    @IsString()
    event_name: string


    @ApiProperty({example: '2022-10-10', description: "boshlash sanasi"})
    @IsNotEmpty()
    @IsDateString()
    start_date: Date

    @ApiProperty({example: '19:00', description: "boshlash vaqti"})
    @IsNotEmpty()
    @IsMilitaryTime()
    start_time: string

    @ApiProperty({example: '2022-12-12', description: "tugash sanasi"})
    @IsNotEmpty()
    @IsDateString()
    finish_date: Date

    @ApiProperty({example: '21:00', description: "tugash vaqti"})
    @IsNotEmpty()
    @IsMilitaryTime()
    finish_time: string

    @ApiProperty({example: 'Event', description: "event info"})
    @IsNotEmpty()
    @IsString()
    info: string

    @ApiProperty({example: '2', description: "event type id"})
    @IsNotEmpty()
    @IsNumberString()
    event_type_id: number

    @ApiProperty({example: '2', description: "human category id"})
    @IsNotEmpty()
    @IsNumberString()
    human_category_id: number

    @ApiProperty({example: '2', description: "venue id"})
    @IsNotEmpty()
    @IsNumberString()
    venue_id: number

    @ApiProperty({example: '1', description: "language id"})
    @IsNotEmpty()
    @IsNumberString()
    lang_id: number

    @ApiProperty({example: '2000-12-12', description: "Release date"})
    @IsOptional()
    @IsDateString()
    relase_date: Date
 
}
