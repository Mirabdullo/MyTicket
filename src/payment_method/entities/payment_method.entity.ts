import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "payment_method", timestamps: false})
export class PaymentMethod extends Model<PaymentMethod>{
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
