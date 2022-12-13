import { cp } from "fs";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "district"})
export class District extends Model<District>{
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
    region_id: number

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    name: string
}
