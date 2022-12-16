import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "human_category"})
export class HumanCategory extends Model<HumanCategory>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'Hamma uchun', description: "Info gender"})
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string

    
    @ApiProperty({example: '6', description: "Yoshi+"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    start_age: number


    @ApiProperty({example: '70', description: "Yoshi "})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    finish_age: number

    @ApiProperty({example: '1', description: "jinsi 1 yoki 2"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    gender: number

}
