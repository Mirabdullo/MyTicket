import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string
}

