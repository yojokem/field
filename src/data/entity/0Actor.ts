import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { Fence } from "./Fence";
import { User } from "./sections/R/User";

@Entity({name: "actor"})
export class Actor0 extends Fence {
    @Column()
    subject: User
}