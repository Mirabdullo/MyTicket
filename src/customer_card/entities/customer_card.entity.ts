import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'customet_card'})
export class CustomerCard extends Model<CustomerCard>{
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
    first_name: string
}
