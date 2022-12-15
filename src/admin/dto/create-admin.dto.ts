import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString({message: "name must be string"})
    readonly name: string

    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    @IsString({message: "name must be string"})
    readonly password: string

    is_active?: boolean

    is_creator?: boolean
}
