import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "region"})
export class Region extends Model<Region>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    name: string
}
