import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateAdminDto {
    @ApiProperty({example: 'user1', description: "Admin ismi"})
    @IsNotEmpty()
    @IsString({message: "name must be string"})
    readonly name: string

    @ApiProperty({example: 'admin@gmail.com', description: "Admin emaili"})
    @IsEmail()
    readonly email: string

    @ApiProperty({example: '123454', description: "Admin paroli"})
    @IsNotEmpty()
    @IsString({message: "name must be string"})
    readonly password: string

    @ApiProperty({example: 'true', description: "Admin activligi"})
    is_active?: boolean

    @ApiProperty({example: 'true', description: "Admin creatorligi"})
    is_creator?: boolean
}
