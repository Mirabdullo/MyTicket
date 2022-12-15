import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @IsNotEmpty()
    @IsString()
    name: string
}
