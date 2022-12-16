import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @ApiProperty({example: 'yetkazib berish', description: "Yetkazib berish"})
    @IsNotEmpty()
    @IsString()
    name: string
}
