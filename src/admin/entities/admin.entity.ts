import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({tableName: 'admin', timestamps: false})
export class Admin extends Model<Admin>{
    @ApiProperty({example: '1', description: "Unikal ID"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'Admin', description: "Admin ismi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string


    @ApiProperty({example: 'admin@gmail.com', description: "Adminemaili"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string

    @ApiProperty({example: '12345', description: "Admin paroli"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @ApiProperty({example: 'true', description: "Admin altivligi"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @ApiProperty({example: 'true', description: "Admin creatorligi"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_creator: boolean

    @ApiProperty({example: 'e4rt9wnye8tq9yciruqp', description: "Admin tokeni"})
    @Column({
        type: DataType.STRING
    })
    refresh_token: string
}
