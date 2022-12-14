import { Column, DataType, Model, Table } from "sequelize-typescript"
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

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number

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
}
