import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "human_category"})
export class HumanCategory extends Model<HumanCategory>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    start_age: number


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    finish_age: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    gender: string

}
