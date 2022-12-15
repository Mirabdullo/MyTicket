import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountCouponDto {
    @IsNotEmpty()
    @IsString()
    name: string
}
