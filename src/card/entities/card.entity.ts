import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customer/entities/customer.entity";
import { Status } from "src/status/entities/status.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

@Table({tableName: 'card', timestamps: false, freezeTableName: true})
export class Card extends Model<Card>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Ticket)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    ticket_id: number

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    customer_id: number

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    createdAt: string

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    finishedAt: string

    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    status_id: number

    @BelongsTo(() => Ticket)
    ticket: Ticket

    @BelongsTo(() => Customer)
    customer: Customer
    
    @BelongsTo(() => Status)
    status: Status
}
