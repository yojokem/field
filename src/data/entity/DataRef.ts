import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { default0 } from "./0default";

@Entity({name: "dataref"})
export class DataRef extends default0 {
    @BinaryUuidColumn()
    @ManyToOne(() => default0, data => data.references)
    data: default0;

    @SectionColumn()
    section!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    created!: Date;

    @DeleteDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    deleted!: Date;
}