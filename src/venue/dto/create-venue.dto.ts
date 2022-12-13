import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateVenueDto {
    @IsNotEmpty()
    @IsString({message: 'name must be string'})
    readonly name: string
    @IsNotEmpty()
    @IsString({message: 'address must be string'})
    address: string
    @IsNotEmpty()
    @IsString({message: 'lacation must be string'})
    location: string
    @IsNotEmpty()
    @IsString({message: 'site must be string'})
    site: string
    @IsNotEmpty()
    @IsString({message: 'phone must be string'})
    phone: string
    @IsNotEmpty()
    @IsString({message: 'schema must be string'})
    schema: string
    @IsNotEmpty()
    @IsNumber({},{message: 'name must be number'})
    region_id: number
    @IsNotEmpty()
    @IsNumber({},{message: 'name must be number'})
    district_id: number
}
