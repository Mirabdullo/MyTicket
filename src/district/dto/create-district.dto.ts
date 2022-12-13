import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
    @IsNotEmpty()
    @IsNumber()
    region_id: number

    @IsNotEmpty()
    @IsString()
    name: string
}
