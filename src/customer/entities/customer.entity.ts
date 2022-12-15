import { BelongsTo, Column, DataType, ForeignKey, Min, Model, Table } from "sequelize-typescript";
import { Language } from "src/language/entities/language.entity";

@Table({tableName: 'customer', timestamps: false})
export class Customer extends Model<Customer>{
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
    first_name: string


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    last_name: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    phone: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string


    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    birth_day: Date


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    gender: number

    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    lang_id: number

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string

    @BelongsTo(() => Language)
    language: Language
}
