import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/entities/event.entity";
import { Seat } from "src/seat/entities/seat.entity";
import { Status } from "src/status/entities/status.entity";
import { TicketType } from "src/ticket_type/entities/ticket_type.entity";

@Table({tableName: 'ticket', timestamps: false})
export class Ticket extends Model<Ticket>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Event)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    event_id: number

    @ForeignKey(() => Seat)
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

    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    status_id: number

    @ForeignKey(() => TicketType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    ticket_type_id: number

    @BelongsTo(() => Event)
    event: Event

    @BelongsTo(() => Seat)
    seat: Seat

    @BelongsTo(() => Status)
    status: Status

    @BelongsTo(() => TicketType)
    ticketType: TicketType
}
