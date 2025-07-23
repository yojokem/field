import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToMany, Timestamp } from "typeorm";
import { BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { DataRef } from "./DataRef";

export abstract class default0 {
    @PrimaryGeneratedBinaryUuidColumn()
    uid!: string;

    @BinaryUUuidColumn()
    @OneToMany(() => DataRef, ref => ref.data)
    references: DataRef[];

    @Column({type: "varchar", unique: true})
    name!: string;

    @SectionColumn()
    section!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    created!: Timestamp;

    @DeleteDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    deleted!: Timestamp | null;
}