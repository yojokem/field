import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToMany } from "typeorm";
import { BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { DataRef } from "./DataRef";

export class default0 {
    @PrimaryGeneratedBinaryUuidColumn()
    uid!: string;

    @BinaryUUuidColumn()
    @OneToMany(() => DataRef, ref => ref.data)
    @JoinColumn([
        {name: "uid", referencedColumnName: "duid"}
    ])
    references: DataRef[];

    @Column({type: "varchar", unique: true})
    name!: string;

    @SectionColumn()
    section!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    created!: Date;

    @DeleteDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    deleted!: Date | null;
}