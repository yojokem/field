import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { Fence } from "./Fence";

@Entity({name: "dataref"})
export class DataRef extends Fence {
    @ManyToOne(() => Fence, data => data.references, {cascade: ['insert', 'soft-remove', 'update', 'recover']})
    @JoinColumn({name: "duid", referencedColumnName: "uid"})
    data: Fence;

    @Column()
    type: string;
}