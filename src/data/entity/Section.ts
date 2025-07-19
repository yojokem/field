import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("section")
export class Section {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "varchar", length: 255, nullable: false})
    name: string

    @Column({type: "text", length: 1023, nullable: false})
    desc: string
}