import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventTypeDto {
    @ApiProperty({example: 'sport', description: "event type name"})
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({example: 'sport', description: "parent event type id"})
    @IsOptional()
    @IsNumber()
    parent_event_type_id: number
}
