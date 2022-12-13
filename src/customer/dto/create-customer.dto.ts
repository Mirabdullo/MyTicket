import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString({message: 'must be a string'})
    first_name: string
    @IsNotEmpty()
    @IsString({message: 'must be a string'})
    last_name: string
    @IsNotEmpty()
    @IsString({message: 'must be a string'})
    phone: string
    @IsNotEmpty()
    @IsString({message: 'must be a string'})
    password: string
    @IsEmail({},{message: 'must be a string'})
    email: string
    @IsDate({message: 'must be a string'})
    birth_day: string
    @IsNotEmpty()
    @IsString({message: 'must be a string'})
    gender: number
    @IsString({message: 'must be a string'})
    lang_id: number
}
