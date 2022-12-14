import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string
}
