import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'discount', timestamps: false})
export class DiscountCoupon extends Model<DiscountCoupon>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @ApiProperty({example: 'yetkazib berish', description: "yetkazib berish"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string
}
