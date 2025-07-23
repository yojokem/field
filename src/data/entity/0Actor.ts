import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../typeorm.decorators";
import { default0 } from "./0default";
import { User } from "./sections/R/User";

@Entity({name: "actor"})
export class Actor0 extends default0 {
    @Column()
    subject: User
}