import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from 'src/customer/entities/customer.entity';
import { Status } from 'src/status/entities/status.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';

@Table({ tableName: 'cart', timestamps: false, freezeTableName: true })
export class Cart extends Model<Cart> {
  @ApiProperty({ example: '1', description: 'Unikal id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'Ticket id' })
  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticket_id: number;

  @ApiProperty({ example: '1', description: 'Customer id' })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ApiProperty({ example: '18:00', description: 'Boshlanish vaqti' })
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  createdAt: string;

  @ApiProperty({ example: '20:00', description: 'Tugash vaqti' })
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  finishedAt: string;

  @ApiProperty({ example: '1', description: 'Status id' })
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Status)
  status: Status;
}
