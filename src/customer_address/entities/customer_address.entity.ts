import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "src/country/entities/country.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";

@Table({tableName: 'customer_address', timestamps: false, freezeTableName: true})
export class CustomerAddress extends Model<CustomerAddress>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: '1', description: "Foydalanuvchi idsi"})
    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    customer_id: number

    @ApiProperty({example: 'Akmal', description: "Nomi haqida"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @ApiProperty({example: 'Uzbekistan', description: "Davalat nomi"})
    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    country_id: number

    @ApiProperty({example: 'Andijon', description: "Viloyat nomi"})
    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    region_id: number

    @ApiProperty({example: 'Baliqchi', description: "Tuman nomi"})
    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    district_id: number

    @ApiProperty({example: 'Navoiy', description: "Kocha nomi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    street: string

    @ApiProperty({example: '1', description: "dom raqami"})
    @Column({
        type: DataType.STRING,
    })
    house: string

    @ApiProperty({example: '1', description: "Uy raqami"})
    @Column({
        type: DataType.INTEGER,
    })
    flat: number

    @ApiProperty({example: 'location', description: "locatsiyasi"})
    @Column({
        type: DataType.STRING,
    })
    location: string

    @ApiProperty({example: '7845', description: "pochta raqami"})
    @Column({
        type: DataType.STRING,
    })
    post_index: string

    @ApiProperty({example: 'Adress', description: "Address haqida"})
    @Column({
        type: DataType.STRING,
    })
    info: string 

    @BelongsTo(() => Customer)
    customer: Customer

    @BelongsTo(() => Country)
    country: Country

    @BelongsTo(() => Region)
    region: Region

    @BelongsTo(() => District)
    district: District
}
