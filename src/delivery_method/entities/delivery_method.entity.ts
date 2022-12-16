import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'delivery', timestamps: false})
export class DeliveryMethod extends Model<DeliveryMethod>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'yetkazib berish', description: "Yetkazib berish"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string
}
