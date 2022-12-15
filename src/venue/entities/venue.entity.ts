import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";
import { District } from "src/district/entities/district.entity";
import { Region } from "src/region/entities/region.entity";
import { VenueType } from "src/venue_type/entities/venue_type.entity";

@Table({tableName: 'venue'})
export class Venue extends Model<Venue>{
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

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    address: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    location: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    site: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string

    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_type_id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    schema: string
    
    @ForeignKey(()=> Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    region_id: number

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    district_id: number

    @BelongsTo(() => VenueType)
    venueType: VenueType

    @BelongsTo(() => Region)
    region: Region

    @BelongsTo(() => District)
    district: District
}
