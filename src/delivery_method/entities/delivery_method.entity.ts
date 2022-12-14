import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'delivery'})
export class DeliveryMethod extends Model<DeliveryMethod>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string
}
