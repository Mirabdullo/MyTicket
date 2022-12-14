import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @IsNotEmpty()
    @IsString()
    payment_name: string
}
