import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Card } from "src/card/entities/card.entity";
import { DeliveryMethod } from "src/delivery_method/entities/delivery_method.entity";
import { DiscountCoupon } from "src/discount_coupon/entities/discount_coupon.entity";
import { PaymentMethod } from "src/payment_method/entities/payment_method.entity";
import { Status } from "src/status/entities/status.entity";

@Table({tableName: 'booking', freezeTableName: true, timestamps: false})
export class Booking extends Model<Booking>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Card)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    card_id: number

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    createdAt: string


    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    finishedAt: string

    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    payment_method_id: number

    @ForeignKey(() => DeliveryMethod)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    delivery_method_id: number

    @ForeignKey(() => DiscountCoupon)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    discount_coupon_id: number

    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    status_id: number

    @BelongsTo(() => Card)
    card: Card

    @BelongsTo(() => PaymentMethod)
    paymentMethod: PaymentMethod

    @BelongsTo(() => DeliveryMethod)
    deliveryMethod: DeliveryMethod

    @BelongsTo(() => DiscountCoupon)
    discountCoupon: DiscountCoupon

    @BelongsTo(() => Status)
    status: Status
}
