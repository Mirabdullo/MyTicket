import { Column, DataType, Model, Table } from "sequelize-typescript";

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
        allowNull: false
    })
    photo: string

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

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    event_type_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    human_category_id: number


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number

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
}
