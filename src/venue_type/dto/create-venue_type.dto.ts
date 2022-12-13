import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string
}
