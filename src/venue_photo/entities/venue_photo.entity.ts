import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'venue_photo'})
export class VenuePhoto extends Model<VenuePhoto>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    venue_id: number

    @Column({
        type: DataType.STRING
    })
    image: string

}
