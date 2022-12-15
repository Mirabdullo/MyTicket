import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "src/country/entities/country.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";

@Table({tableName: 'customer_address', timestamps: false, freezeTableName: true})
export class CustomerAddress extends Model<CustomerAddress>{
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
        allowNull: false
    })
    customer_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    country_id: number

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    region_id: number

    @ForeignKey(() => District)
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

    @BelongsTo(() => Customer)
    customer: Customer

    @BelongsTo(() => Country)
    country: Country

    @BelongsTo(() => Region)
    region: Region

    @BelongsTo(() => District)
    district: District
}
