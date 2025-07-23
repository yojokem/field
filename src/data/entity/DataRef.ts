import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { default0 } from "./0default";

@Entity({name: "dataref"})
export class DataRef extends default0 {
    @ManyToOne(() => default0, data => data.references, {cascade: ['insert', 'soft-remove', 'update', 'recover']})
    @JoinColumn({name: "duid", referencedColumnName: "uid"})
    data: default0;

    @Column()
    type: string;
}