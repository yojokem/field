import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { default0 } from "./0default";

@Entity({name: "dataref"})
export class dataref0 {
    @PrimaryGeneratedBinaryUuidColumn()
    uid!: string;

    @ManyToOne(() => default0, data => data.references)
    data: default0;

    @Column({type: "varchar", unique: true})
    name!: string;

    @SectionColumn()
    section!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    created!: Date;

    @DeleteDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    deleted!: Date;
}