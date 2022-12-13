import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'event_type'})
export class EventType extends Model<EventType> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        unique: true
    })
    name: string

    @Column({
        type: DataType.INTEGER
    })
    parent_event_type_id: number
}
