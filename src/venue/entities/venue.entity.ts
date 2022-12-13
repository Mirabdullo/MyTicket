import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table({tableName: 'venue'})
export class Venue extends Model<Venue>{
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
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    address: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    location: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    site: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_type_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    schema: string
    
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
}
