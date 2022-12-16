import { ApiProperty } from "@nestjs/swagger";
import { cp } from "fs";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Region } from "src/region/entities/region.entity";

@Table({tableName: "district"})
export class District extends Model<District>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: '1', description: "Region ID"})
    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    region_id: number

    @ApiProperty({example: 'Andijon', description: "district nomi"})
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    name: string

    @BelongsTo(() => Region)
    region: Region
}
