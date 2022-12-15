import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { EventType } from "src/event_type/entities/event_type.entity";
import { HumanCategory } from "src/human_category/entities/human_category.entity";
import { Language } from "src/language/entities/language.entity";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'event', timestamps: false})
export class Event extends Model<Event>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    event_name: string

    @Column({
        type: DataType.STRING,
    })
    image: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    start_date: Date

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    start_time: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    finish_date: Date

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    finish_time: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    info: string

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    event_type_id: number

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    human_category_id: number


    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number

    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    lang_id: number

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
