import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "section"})
export class Section {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    
    desc: string
}