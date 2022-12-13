import { Column, DataType, Min, Model, Table } from "sequelize-typescript";

@Table({tableName: 'customer'})
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
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string


    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    birth_day: string


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    gender: number


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    lang_id: number

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string
}
