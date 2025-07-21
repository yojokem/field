import { Entity, Column, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToMany } from "typeorm";
import { BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { dataref0 } from "./0history_ref";

@Entity({name: "0default"})
export class default0 {
    @PrimaryGeneratedBinaryUuidColumn()
    uid!: string;

    @BinaryUUuidColumn()
    @OneToMany(() => dataref0, ref => ref.data)
    @JoinColumn([
        {name: "uid", referencedColumnName: "duid"}
    ])
    references: dataref0[];

    @Column({type: "varchar", unique: true})
    name!: string;

    @SectionColumn()
    section!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    created!: Date;

    @DeleteDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP()"})
    deleted!: Date | null;
}