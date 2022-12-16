import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

@Table({tableName: 'event_type'})
export class EventType extends Model<EventType> {
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'sport', description: "event type name"})
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    name: string

    @ApiProperty({example: '1', description: "parent type ID"})
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