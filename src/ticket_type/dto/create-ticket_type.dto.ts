import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string
}
