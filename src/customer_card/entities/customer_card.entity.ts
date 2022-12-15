import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customer/entities/customer.entity";

@Table({tableName: 'customet_card'})
export class CustomerCard extends Model<CustomerCard>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
    })
    customer_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    number: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    year: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    month: number

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_main: boolean

    @BelongsTo(() => Customer)
    customer: Customer
}
