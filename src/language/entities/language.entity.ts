import { ftruncate } from "fs";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'language'})
export class Language extends Model<Language>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    name: string
}
