import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsNumber()
    parent_event_type_id: number
}
