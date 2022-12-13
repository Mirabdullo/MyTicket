import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'country'})
export class Country extends Model<Country> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string
}
