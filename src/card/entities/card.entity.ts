import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'card', timestamps: false, freezeTableName: true})
export class Card extends Model<Card>{
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
    ticket_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    customer_id: number

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    createdAt: Date

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    finishedAt: Date

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    status_id: number
}
