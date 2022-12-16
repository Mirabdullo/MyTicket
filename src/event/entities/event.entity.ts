import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { EventType } from "src/event_type/entities/event_type.entity";
import { HumanCategory } from "src/human_category/entities/human_category.entity";
import { Language } from "src/language/entities/language.entity";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'event', timestamps: false})
export class Event extends Model<Event>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'Event', description: "event name"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    event_name: string

    @ApiProperty({example: 'image.gpg', description: "EVENT foto"})
    @Column({
        type: DataType.STRING,
    })
    image: string

    @ApiProperty({example: '2022-11-30', description: "Boshlanish sanasi"})
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    start_date: Date

    @ApiProperty({example: '16:00', description: "Boshlanish vaqti"})
    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    start_time: string

    @ApiProperty({example: '2022-12-12', description: "Tugash sanasi"})
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    finish_date: Date

    @ApiProperty({example: '18:00', description: "Tugash vaqti"})
    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    finish_time: string

    @ApiProperty({example: 'info', description: "Info"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    info: string

    @ApiProperty({example: '1', description: "event type ID"})
    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    event_type_id: number

    @ApiProperty({example: '1', description: "human category ID"})
    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    human_category_id: number


    @ApiProperty({example: '1', description: "venue ID"})
    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number

    @ApiProperty({example: '1', description: "language ID"})
    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    lang_id: number

    @ApiProperty({example: '200-11-12', description: "Relase date"})
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    relase_date: Date

    @BelongsTo(() => EventType)
    eventType: EventType

    @BelongsTo(() => HumanCategory)
    humanCategory: HumanCategory

    @BelongsTo(() => Venue)
    venue: Venue

    @BelongsTo(() => Language)
    language: Language
}
