import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'country'})
export class Country extends Model<Country> {
    @ApiProperty({example: '1', description: "Unikal id"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'Uzbekistan', description: "Davlat nomi"})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    name: string
}
