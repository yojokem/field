import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({name: "section"})
export class Section {
    @PrimaryColumn({type: "varchar", length: 5, nullable: false})
    id: string;

    @Column({type: "varchar", unique: true, nullable: false})
    name: string;

    @Column({type: "tinytext", charset: "utf-8", nullable: false})
    desc: string;

    @Column({type: "varchar", nullable: true})
    effect: string;
}