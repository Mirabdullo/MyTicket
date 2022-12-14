import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'customer_address', timestamps: false, freezeTableName: true})
export class CustomerAddress extends Model<CustomerAddress>{
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
    customer_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    country_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    region_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    district_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    street: string

    @Column({
        type: DataType.STRING,
    })
    house: string

    @Column({
        type: DataType.INTEGER,
    })
    flat: number

    @Column({
        type: DataType.STRING,
    })
    location: string

    @Column({
        type: DataType.STRING,
    })
    post_index: string

    @Column({
        type: DataType.STRING,
    })
    info: string
}
