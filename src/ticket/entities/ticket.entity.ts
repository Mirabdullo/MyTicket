import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'ticket', timestamps: false})
export class Ticket extends Model<Ticket>{
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
    event_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    seat_id: number

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    price: number

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    service_fee: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    status_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    ticket_type_id: number
}
