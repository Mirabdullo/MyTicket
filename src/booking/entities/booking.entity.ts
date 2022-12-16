import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/entities/cart.entity';
import { DeliveryMethod } from 'src/delivery_method/entities/delivery_method.entity';
import { DiscountCoupon } from 'src/discount_coupon/entities/discount_coupon.entity';
import { PaymentMethod } from 'src/payment_method/entities/payment_method.entity';
import { Status } from 'src/status/entities/status.entity';

@Table({ tableName: 'booking', freezeTableName: true, timestamps: false })
export class Booking extends Model<Booking> {
  @ApiProperty({ example: '1', description: 'Unikal id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'Cart id' })
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  card_id: number;

  @ApiProperty({ example: '12:00', description: 'Boshlanish vaqti' })
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  createdAt: string;

  @ApiProperty({ example: '12:30', description: 'Tugash vaqti' })
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  finishedAt: string;

  @ApiProperty({ example: '1', description: 'Payment id' })
  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;

  @ApiProperty({ example: '1', description: 'Delivery id' })
  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  delivery_method_id: number;

  @ApiProperty({ example: '1', description: 'Discount id' })
  @ForeignKey(() => DiscountCoupon)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_coupon_id: number;

  @ApiProperty({ example: '1', description: 'Status id' })
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => PaymentMethod)
  paymentMethod: PaymentMethod;

  @BelongsTo(() => DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  @BelongsTo(() => DiscountCoupon)
  discountCoupon: DiscountCoupon;

  @BelongsTo(() => Status)
  status: Status;
}
