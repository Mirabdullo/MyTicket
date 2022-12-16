import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountCouponDto {
    @ApiProperty({example: 'yetkazib berish', description: "yetkazib berish"})
    @IsNotEmpty()
    @IsString()
    name: string
}
