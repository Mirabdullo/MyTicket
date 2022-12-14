import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator"
import { Unique } from "sequelize-typescript"

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString({message: 'fname must be a string'})
    first_name: string

    @IsNotEmpty()
    @IsString({message: 'lname  must be a string'})
    last_name: string

    @IsNotEmpty()
    @IsString({message: 'phone must be a string'})
    phone: string

    @IsNotEmpty()
    @IsString({message: 'password must be a string'})
    @MinLength(4,{message: "Parol kamida 4ta belgidan iboraat bo'lisi keral "})
    password: string

    @IsEmail({},{message: 'email must be a string'})
    email: string

    @IsDateString({},{message: 'birth day must be a string'})
    birth_day: Date

    @IsNumber({},{message: 'gender must be a number'})
    @Min(1)
    @Max(2)
    gender: number

    @IsNumber({},{message: ' langId must be a string'})
    lang_id: number

    @IsOptional()
    @IsString()
    hashed_refresh_token: string
}
