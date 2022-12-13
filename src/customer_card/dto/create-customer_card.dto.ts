import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerCardDto {
    @IsNotEmpty()
    @IsNumber()
    customer_is: number

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    phone: string

    @IsNotEmpty()
    @IsString()
    number: string

    @IsNotEmpty()
    @IsNumber()
    year: number

    @IsNotEmpty()
    @IsNumber()
    month: number

    @IsNotEmpty()
    @IsBoolean()
    is_active: boolean

    @IsNotEmpty()
    @IsBoolean()
    is_main: boolean

}
