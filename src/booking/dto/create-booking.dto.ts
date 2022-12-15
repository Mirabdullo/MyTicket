import { IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateBookingDto {
    @IsNotEmpty()
    @IsNumber()
    card_id: number
    @IsNotEmpty()
    @IsMilitaryTime()
    createdAt: string
    @IsNotEmpty()
    @IsMilitaryTime()
    finishedAt: string
    @IsNotEmpty()
    @IsNumber()
    payment_method_id: number
    @IsNotEmpty()
    @IsNumber()
    delivery_method_id: number
    @IsNotEmpty()
    @IsNumber()
    discount_coupon_id: number
    @IsNotEmpty()
    @IsNumber()
    status_id:number

}
