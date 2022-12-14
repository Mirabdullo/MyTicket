import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'status', timestamps: false})
export class Status extends Model<Status>{
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


//canselled
//ok
