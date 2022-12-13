import { IsNumber } from "class-validator"
import { ForeignKey } from "sequelize-typescript"

export class CreateVenuePhotoDto {
    @IsNumber()
    object_id: number

    image: string
}
