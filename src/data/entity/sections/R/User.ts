import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../../../typeorm.decorators";
import { Fence } from "../../Fence";

@Entity({name: "user"})
export class User extends Fence {
    
}