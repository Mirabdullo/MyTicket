import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "src/customer/entities/customer.entity";

@Table({tableName: 'customet_card'})
export class CustomerCard extends Model<CustomerCard>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: '1', description: "Customer ID"})
    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
    })
    customer_id: number

    @ApiProperty({example: 'Customer', description: "Foydalanuvchi ismi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @ApiProperty({example: '996582141', description: "Foydalanuvchi telefon raqami"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string

    @ApiProperty({example: '1036 6540 6540 6549 7888', description: "karta raqami"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    number: string

    @ApiProperty({example: '2022', description: "yili"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    year: number

    @ApiProperty({example: '1', description: "oyi"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    month: number

    @ApiProperty({example: 'true', description: "karta activligi"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @ApiProperty({example: 'true', description: "asosiy karta"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_main: boolean

    @BelongsTo(() => Customer)
    customer: Customer
}
