import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { SeatType } from "src/seat_type/entities/seat_type.entity"
import { Venue } from "src/venue/entities/venue.entity"
@Table({tableName: 'seat'})
export class Seat extends Model<Seat> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    sector: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    row_number: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    number: number

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    seat_type_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    location_in_schema: string

    @BelongsTo(() => Venue)
    venue: Venue

    @BelongsTo(() => SeatType)
    seatType: SeatType
}
