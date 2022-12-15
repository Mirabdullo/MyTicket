import { ApiProperty } from "@nestjs/swagger"
import { IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateBookingDto {
    @ApiProperty({example: '1', description: "Card id"})
    @IsNotEmpty()
    @IsNumber()
    card_id: number
    @ApiProperty({example: '12:00', description: "Boshlangan vaqt"})
    @IsNotEmpty()
    @IsMilitaryTime()
    createdAt: string
    @ApiProperty({example: '12:30', description: "Tugash vaqti"})
    @IsNotEmpty()
    @IsMilitaryTime()
    finishedAt: string
    @ApiProperty({example: '1', description: "Payment id"})
    @IsNotEmpty()
    @IsNumber()
    payment_method_id: number
    @ApiProperty({example: '1', description: "Delivery id"})
    @IsNotEmpty()
    @IsNumber()
    delivery_method_id: number
    @ApiProperty({example: '1', description: "Discount id"})
    @IsNotEmpty()
    @IsNumber()
    discount_coupon_id: number
    @ApiProperty({example: '1', description: "Status id"})
    @IsNotEmpty()
    @IsNumber()
    status_id:number

}
