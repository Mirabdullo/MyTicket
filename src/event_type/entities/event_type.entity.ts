import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

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
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    name: string

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER
    })
    parent_event_type_id: number

    @BelongsTo(() => EventType)
    eventType: EventType
}

/* 
!   
*/