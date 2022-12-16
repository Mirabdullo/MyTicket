import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({example: '1', description: "Region ID"})
    @IsNotEmpty()
    @IsNumber()
    region_id: number

    @ApiProperty({example: 'Andijon', description: "district nomi"})
    @IsNotEmpty()
    @IsString()
    name: string
}
