import { Entity, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { BinaryUuidColumn, BinaryUUuidColumn, PrimaryGeneratedBinaryUuidColumn, SectionColumn } from "../../../../typeorm.decorators";
import { default0 } from "../../0default";

@Entity({name: "user"})
export class User extends default0 {
    
}