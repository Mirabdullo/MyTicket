import { IsNumber, IsNumberString } from "class-validator"
import { ForeignKey } from "sequelize-typescript"

export class CreateVenuePhotoDto {
    @IsNumber()
    readonly venue_id: number
}
