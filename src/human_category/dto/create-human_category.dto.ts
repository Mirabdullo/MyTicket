import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateHumanCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNumber()
    start_age: number

    @IsNumber()
    finish_age: number

    @IsNumber()
    @Min(1)
    @Max(2)
    gender: number
}
