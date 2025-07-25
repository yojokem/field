import { Entity, Column, PrimaryColumn } from "typeorm";
import { Fence } from "./Fence";

@Entity({name: "section"})
export class Section extends Fence {
    @PrimaryColumn({type: "varchar", length: 5, nullable: false})
    id: string;

    @Column({type: "varchar", unique: true, nullable: false})
    name: string;

    @Column({type: "tinytext", charset: "utf-8", nullable: false})
    desc: string;

    @Column({type: "varchar", nullable: true})
    effect: string;
}