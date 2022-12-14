import { IsBoolean, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateCustomerCardDto {
    @IsNotEmpty()
    @IsNumber()
    customer_id: number

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
    @Min(2022)
    year: number

    @IsNumber()
    @Min(1)
    @Max(12)
    month: number

    @IsBoolean()
    is_active: boolean

    @IsBoolean()
    is_main: boolean

}
