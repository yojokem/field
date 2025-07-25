import { Column, Entity } from "typeorm";
import { Fence } from "../Fence";

@Entity({name: "address"})
export class Address extends Fence {
    public Address() {
        this.name = "Address▷" + this.holder.id();
    }

    holder: AddressHolder;

    @Column()
    metropolitan1: string;

    @Column()
    metropolitan2: string;

    @Column()
    municipality3: string;

    @Column()
    roadname4: string;
    
    @Column()
    detail5: string;

    @Column()
    detail6: string;

    @Column()
    remark7: string;

    @Column()
    zipcode: string;
}

export interface AddressHolder {
    id(): string;
}