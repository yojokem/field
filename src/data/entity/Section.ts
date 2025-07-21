import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "section"})
export class Section {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", unique: true})
    name: string

    @Column({type: "tinytext", charset: "utf-8"})
    desc: string
}