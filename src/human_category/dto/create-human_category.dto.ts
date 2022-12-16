import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateHumanCategoryDto {
    @ApiProperty({example: 'Hamma uchun', description: "Info gender"})
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({example: 'Hamma uchun', description: "Info gender"})
    @IsNumber()
    start_age: number

    @ApiProperty({example: 'Hamma uchun', description: "Info gender"})
    @IsNumber()
    finish_age: number

    @ApiProperty({example: 'Hamma uchun', description: "Info gender"})
    @IsNumber()
    @Min(1)
    @Max(2)
    gender: number
}
